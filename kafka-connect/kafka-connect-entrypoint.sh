#!/bin/bash

# Download and install the Kafka Connect Elasticsearch plugin
echo "Downloading and installing Kafka Connect Elasticsearch plugin..."
confluent-hub install --no-prompt confluentinc/kafka-connect-elasticsearch:14.0.17

# Start Kafka Connect in the background
/etc/confluent/docker/run &

# Wait for Kafka Connect to be up and running
until curl -s http://localhost:8083/connectors; do
  echo "Waiting for Kafka Connect to start..."
  sleep 5
done

# Register the connector
curl -X POST http://localhost:8083/connectors -H 'Content-Type: application/json' -d @/etc/kafka/connect/connector-config.json

# Bring Kafka Connect to the foreground
wait
