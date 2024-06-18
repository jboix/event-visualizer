#!/bin/bash

# Define the number of concurrent runs
NUM_RUNS=5

# Function to launch the script
launch_script() {
  npm run start
}

# Trap the termination signal (SIGTERM) and clean up
trap 'kill $(jobs -p)' SIGINT SIGTERM EXIT

# Run npm install to ensure all dependencies are installed
echo "Running npm install to ensure all dependencies are installed..."
npm install

# Launch the script concurrently
for i in $(seq 1 $NUM_RUNS); do
  echo "Launching instance $i"
  launch_script &
done

# Wait for all background processes to complete
wait

echo "All instances completed"
