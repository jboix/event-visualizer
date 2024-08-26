package ch.srgssr.pillarbox.qos

import ch.srgssr.pillarbox.qos.event.SseClient
import jakarta.annotation.PostConstruct
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

/**
 * Main entry point for the Pillarbox QoS REST application.
 */
@SpringBootApplication
class PillarboxQosDataTransferApplication(private val sseClient: SseClient) {
  @PostConstruct
  fun init() {
    sseClient.start()
  }
}

/**
 * The main function that starts the Spring Boot application.
 *
 * @param args Command-line arguments passed to the application.
 */
fun main(args: Array<String>) {
  runApplication<PillarboxQosDataTransferApplication>(*args)
}
