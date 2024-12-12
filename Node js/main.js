const { Worker } = require('worker_threads');

// Create a worker to solve the task
const worker = new Worker('./worker.js', { workerData: { number: 17 } });

// Listen for the worker's result
worker.on('message', (result) => {
    console.log(`Is 7 a prime number? ${result}`);
});

// Handle errors if the worker fails
worker.on('error', (err) => {
    console.error('Worker error:', err);
});
