# Dockerfile for grafana
FROM grafana/grafana:11.0.0

# Copy provisioning and dashboards
COPY ./provisioning /etc/grafana/provisioning
COPY ./dashboards /var/lib/grafana/dashboards

# Set environment variables
ENV GF_AUTH_ANONYMOUS_ENABLED=true \
    GF_AUTH_ANONYMOUS_ORG_ROLE=Admin \
    GF_AUTH_DISABLE_LOGIN_FORM=true
