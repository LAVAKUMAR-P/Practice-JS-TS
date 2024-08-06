"use strict";
//Add 2 numbers 
const addTwoNumbers = (num1, num2) => {
    try {
        return num1 + num2;
    }
    catch (error) {
        console.log(error);
        return "something went wrong";
    }
};
console.log(addTwoNumbers(1, 2));
