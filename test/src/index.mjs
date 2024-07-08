import { Worker } from 'node:worker_threads';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

function createWorker(scriptPath) {
  return new Worker(scriptPath);
}

// Array to hold the workers
const workers = [];

// Path to the worker script
const workerScript = resolve(__dirname, './worker.mjs');


// Function to create workers with a delay
async function createWorkersWithDelay(numWorkers, delay) {
  for (let i = 0; i < numWorkers; i++) {
    const worker = createWorker(workerScript);
    workers.push(worker);

    // Log messages from workers
    worker.on('message', (message) => {
      console.log(`Worker ${i}: ${message}`);
    });

    // Log errors from workers
    worker.on('error', (error) => {
      console.error(`Worker ${i} error:`, error);
    });

    // Log when a worker exits
    worker.on('exit', (code) => {
      if (code !== 0) {
        console.error(`Worker ${i} stopped with exit code ${code}`);
      }
    });

    // Delay before creating the next worker
    await new Promise(resolve => setTimeout(resolve, delay));
  }
}

// Create 1000 workers with a 100ms delay between each creation
createWorkersWithDelay(100, 1000).then(() => {
  console.log(`Created ${workers.length} workers.`);
});
