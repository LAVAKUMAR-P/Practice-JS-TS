const { Worker } = require('worker_threads');
const { fork } = require('child_process');

//Worker 

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


//Child Process


// Start a new process for the task
const child = fork('./child.js');

// Send the number to the child process
child.send(7);

// Listen for the result from the child process
child.on('message', (result) => {
    console.log(`Is 7 a prime number? ${result}`);
});