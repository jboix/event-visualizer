package main

import (
	"encoding/json"
	"flag"
	"log/slog"
	"net/http"
	"sync"
)

// Broker represents the SSE broker.
type Broker struct {
	mu      sync.RWMutex
	clients map[chan string]bool
}

// NewBroker initializes a new SSE broker.
func NewBroker() *Broker {
	return &Broker{
		clients: make(map[chan string]bool),
	}
}

// AddClient adds a new client to the broker.
func (b *Broker) AddClient(clientChan chan string) {
	b.mu.Lock()
	defer b.mu.Unlock()
	b.clients[clientChan] = true
}

// RemoveClient removes a client from the broker.
func (b *Broker) RemoveClient(clientChan chan string) {
	b.mu.Lock()
	defer b.mu.Unlock()
	if _, ok := b.clients[clientChan]; ok {
		delete(b.clients, clientChan)
		close(clientChan)
	}
}

// BroadcastEvent sends an event to all connected clients immediately.
func (b *Broker) BroadcastEvent(event string) {
	b.mu.Lock()
	defer b.mu.Unlock()
	for clientChan := range b.clients {
		select {
		case clientChan <- event:
		default:
			slog.Info("the event", "event", event)
			// If the client can't receive the event, remove it.
			delete(b.clients, clientChan)
			close(clientChan)
		}
	}
}

// ClientCount returns the current number of connected clients.
func (b *Broker) ClientCount() int {
	b.mu.RLock() // Use RLock for reading
	defer b.mu.RUnlock()
	return len(b.clients)
}

func main() {
	// Command-line flags
	port := flag.String("port", "8080", "Port to run the server on")
	debug := flag.Bool("debug", false, "Enable debug logging")
	flag.Parse()

	if *debug {
		slog.SetLogLoggerLevel(slog.LevelDebug)
	}

	broker := NewBroker()

	http.HandleFunc("/api/events", func(w http.ResponseWriter, r *http.Request) {
		var jsonCheck interface{}
		if err := json.NewDecoder(r.Body).Decode(&jsonCheck); err != nil {
			slog.Warn("Invalid JSON received", "error", err)
			http.Error(w, "Invalid JSON", http.StatusBadRequest)
			return
		}

		// Convert the JSON back to a string (if you need to forward it as raw JSON)
		eventBytes, err := json.Marshal(jsonCheck)
		if err != nil {
			slog.Error("Error marshalling JSON", "error", err)
			http.Error(w, "Internal Server Error", http.StatusInternalServerError)
			return
		}

		event := string(eventBytes)
		// slog.Debug("Event received", "event", event)

		// Broadcast the event immediately to all clients
		broker.BroadcastEvent(event)
		w.WriteHeader(http.StatusOK)
	})

	http.HandleFunc("/events", func(w http.ResponseWriter, r *http.Request) {
		flusher, ok := w.(http.Flusher)
		if !ok {
			slog.Error("Streaming unsupported!")
			http.Error(w, "Streaming unsupported!", http.StatusInternalServerError)
			return
		}

		clientChan := make(chan string, 1000)
		broker.AddClient(clientChan)
		defer broker.RemoveClient(clientChan)

		w.Header().Set("Content-Type", "text/event-stream")
		w.Header().Set("Cache-Control", "no-cache")
		w.Header().Set("Connection", "keep-alive")

		if slog.Default().Enabled(nil, slog.LevelDebug) {
			slog.Debug("Client connected", "client_count", broker.ClientCount())
		}

		for {
			select {
			case event, ok := <-clientChan:
				if !ok {
					// Channel closed, client disconnected
					slog.Debug("Client disconnected")
					return
				}
				_, err := w.Write([]byte("data: " + event + "\n\n"))
				if err != nil {
					slog.Error("Error writing to client", "error", err)
					return
				}
				flusher.Flush()
			case <-r.Context().Done():
				// Client closed the connection
				slog.Debug("Client disconnected")
				return
			}
		}
	})

	// Health check endpoint
	http.HandleFunc("/health", func(w http.ResponseWriter, r *http.Request) {
		status := map[string]interface{}{
			"status":       "up",
			"client_count": broker.ClientCount(),
		}
		w.Header().Set("Content-Type", "application/json")
		err := json.NewEncoder(w).Encode(status)
		if err != nil {
			slog.Error("Error encoding health status", "error", err)
			http.Error(w, "Error encoding health status", http.StatusInternalServerError)
			return
		}
	})

	slog.Info("Server started", "port", *port)
	slog.Error("Server stopped", http.ListenAndServe(":"+*port, nil))
}
