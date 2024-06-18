FROM confluentinc/cp-kafka-connect:7.6.1

COPY ./connector-config.json /etc/kafka/connect/connector-config.json
COPY ./kafka-connect-entrypoint.sh /usr/local/bin/kafka-connect-entrypoint.sh

ENV CONNECT_GROUP_ID='connect' \
    CONNECT_CONFIG_STORAGE_TOPIC='connect-config' \
    CONNECT_OFFSET_STORAGE_TOPIC='connect-offsets' \
    CONNECT_STATUS_STORAGE_TOPIC='connect-status' \
    CONNECT_REPLICATION_FACTOR=1 \
    CONNECT_CONFIG_STORAGE_REPLICATION_FACTOR=1 \
    CONNECT_OFFSET_STORAGE_REPLICATION_FACTOR=1 \
    CONNECT_STATUS_STORAGE_REPLICATION_FACTOR=1 \
    CONNECT_KEY_CONVERTER='org.apache.kafka.connect.storage.StringConverter' \
    CONNECT_KEY_CONVERTER_SCHEMAS_ENABLE='false' \
    CONNECT_VALUE_CONVERTER='org.apache.kafka.connect.json.JsonConverter' \
    CONNECT_VALUE_CONVERTER_SCHEMAS_ENABLE='false' \
    CONNECT_INTERNAL_KEY_CONVERTER='org.apache.kafka.connect.storage.StringConverter' \
    CONNECT_INTERNAL_VALUE_CONVERTER='org.apache.kafka.connect.json.JsonConverter' \
    CONNECT_PRODUCER_INTERCEPTOR_CLASSES='io.confluent.monitoring.clients.interceptor.MonitoringProducerInterceptor' \
    CONNECT_CONSUMER_INTERCEPTOR_CLASSES='io.confluent.monitoring.clients.interceptor.MonitoringConsumerInterceptor' \
    CONNECT_REST_ADVERTISED_HOST_NAME='connect' \
    CONNECT_PLUGIN_PATH='/usr/share/java,/usr/share/confluent-hub-components' \
    CONNECT_LOG4J_ROOT_LOGLEVEL=INFO \
    CONNECT_LOG4J_LOGGERS='org.reflections=ERROR' \
    CLASSPATH='/usr/share/java/monitoring-interceptors/monitoring-interceptors-3.3.0.jar'

ENTRYPOINT ["/usr/local/bin/kafka-connect-entrypoint.sh"]
