//Add 2 numbers 
var addTwoNumbers = function (num1, num2) {
    try {
        return num1 + num2;
    }
    catch (error) {
        console.log(error);
        return "something went wrong";
    }
};
console.log(addTwoNumbers(1, 2));
//Write a JavaScript program to find the maximum number in an array. 
var findMaxNumfromarray = function (data) {
    try {
        var num = Math.max.apply(Math, data);
        return num;
    }
    catch (error) {
        console.log(error);
        throw new Error("something went wrong");
    }
};
console.log(findMaxNumfromarray([1, 2, 3, 4, 5]));
