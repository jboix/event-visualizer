# Dockerfile for elasticsearch
FROM docker.elastic.co/elasticsearch/elasticsearch:8.14.1

# Copy configuration files and entrypoint script
COPY ./ilm_policy.json /usr/share/elasticsearch/config/ilm_policy.json
COPY ./index_template.json /usr/share/elasticsearch/config/index_template.json
COPY ./elasticsearch-entrypoint.sh /usr/local/bin/elasticsearch-entrypoint.sh

# Set environment variables
ENV xpack.security.enabled=false \
    discovery.type=single-node \
    bootstrap.memory_lock=true \
    ES_JAVA_OPTS='-Xms512m -Xmx512m' \
    cluster.routing.allocation.disk.threshold_enabled=false

# Set the entrypoint
ENTRYPOINT ["/usr/local/bin/elasticsearch-entrypoint.sh"]
