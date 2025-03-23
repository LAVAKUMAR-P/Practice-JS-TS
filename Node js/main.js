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








// 🔥 How does an IIFE work?
// An IIFE is a function wrapped in parentheses and followed by () to invoke it instantly:

(function () {
    console.log("This function runs immediately!");
})();

// Or using an arrow function:
(() => console.log("Arrow function IIFE!"))();

// Example: Private Counter

const counter = (function () {
    var count = 0;
    return {
        increment: () => ++count,
        getCount: () => count
    };
})();

console.log(counter.increment()); // 1
console.log(counter.getCount());  // 1
count = 11
//Here, count remains private and cannot be modified directly from outside.