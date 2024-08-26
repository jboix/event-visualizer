#!/bin/sh

# Set default values if environment variables are not provided
PORT=${PORT:-8080}
DEBUG=${DEBUG:-false}

# Start the Go application with the provided arguments
exec ./main --port=$PORT --debug=$DEBUG
