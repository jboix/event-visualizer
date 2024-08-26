#!/bin/bash

# Start Elasticsearch in the background
/usr/local/bin/docker-entrypoint.sh elasticsearch &

# Wait for Elasticsearch to be up and running
until curl -s http://localhost:9200; do
  echo "Waiting for Elasticsearch to start..."
  sleep 5
done

# Load ILM policy
curl -X PUT "http://localhost:9200/_ilm/policy/actions_policy" -H 'Content-Type: application/json' -d @/usr/share/elasticsearch/config/ilm_policy.json

# Load index template
curl -X PUT "http://localhost:9200/_template/actions_template" -H 'Content-Type: application/json' -d @/usr/share/elasticsearch/config/index_template.json

# Create the actions index if it doesn't exist
curl -X PUT "http://localhost:9200/actions"

# Bring Elasticsearch to the foreground
wait
