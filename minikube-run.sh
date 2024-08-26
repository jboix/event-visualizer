#!/bin/bash

# Function to handle the cleanup when the script is interrupted
cleanup() {
  echo "Stopping Minikube..."
  minikube stop
  echo "Unloading Minikube Docker environment..."
  eval $(minikube docker-env -u)
  exit
}

# Function to wait for a pod to be ready
wait_for_deployment_ready() {
  local deployment_name=$1
  local namespace=$2
  echo "Waiting for deployment $deployment_name in namespace $namespace to be ready..."
  while true; do
    ready_replicas=$(kubectl get deployment $deployment_name -n $namespace -o jsonpath="{.status.readyReplicas}")
    if [ "$ready_replicas" == "1" ]; then
      echo "Deployment $deployment_name is ready."
      break
    fi
    echo "Current status of deployment $deployment_name: $ready_replicas ready replicas. Retrying in 5 seconds..."
    sleep 5
  done
}

# Trap the INT signal (Ctrl+C) and call the cleanup function
trap cleanup INT

# Stop Minikube if it's already running
if minikube status > /dev/null 2>&1; then
  echo "Stopping existing Minikube instance..."
  minikube stop
fi

# Set Docker environment variables for Minikube
eval $(minikube docker-env)

# Start Minikube
minikube start --driver=docker
echo "Minikube IP address: $(minikube ip)"

# Define the services and their corresponding image names and build contexts
declare -A services=(
    ["qos-sse-brokerr"]="jspboix/qos-sse-broker:1.0.0 ./qos-sse-broker"
    ["qos-data-transfer"]="jspboix/qos-data-transfer:1.0.0 ./qos-data-transfer"
    ["elasticsearch"]="jspboix/elasticsearch:1.0.0 ./elastic-search"
    ["grafana"]="jspboix/grafana:1.0.0 ./grafana"
)

# Set Docker environment to Minikube
eval $(minikube -p minikube docker-env)

# Build and tag Docker images manually
for service in "${!services[@]}"; do
    IFS=' ' read -r -a service_info <<< "${services[$service]}"
    image="${service_info[0]}"
    context="${service_info[1]}"

    echo "Building and tagging $service with image $image from context $context"
    docker build -t $image $context
done

# Convert Docker Compose file to Helm chart using Kompose
kompose convert -f docker-compose.yml -c -o helm-chart

# Create values.yaml with imagePullPolicy set to IfNotPresent
cat <<EOF > ./helm-chart/values.yaml
imagePullPolicy: IfNotPresent
EOF

# Modify the deployment templates to use the imagePullPolicy from values.yaml
find ./helm-chart/templates -type f -name '*.yaml' -exec sed -i '/image:/a \ \ \ \ \ \ \ \ \ \ imagePullPolicy: {{ .Values.imagePullPolicy }}' {} +

# Apply the Helm chart
helm upgrade -i my-release ./helm-chart

# Wait for the pods to be ready
wait_for_deployment_ready "grafana" "default"
wait_for_deployment_ready "qos-sse-broker" "default"
wait_for_deployment_ready "qos-data-transfer" "default"

# Port forwarding services
kubectl port-forward svc/grafana 3000:3000 -n default &
kubectl port-forward svc/qos-sse-broker 8080:8080 -n default &
kubectl port-forward svc/qos-data-transfer 8081:8081 -n default &

# Open Minikube dashboard and wait for user interruption
minikube dashboard &

# Wait for the dashboard process to exit (Ctrl+C)
wait $!
# Cleanup after dashboard process exits
cleanup
