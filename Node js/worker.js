const { parentPort, workerData } = require('worker_threads');

// A simple function to check if a number is prime
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Check the number received from the main file
const result = isPrime(workerData.number);

// Send the result back to the main file
parentPort.postMessage(result);
