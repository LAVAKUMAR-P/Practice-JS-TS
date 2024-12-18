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
// console.log(addTwoNumbers(1,2))
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
// console.log(findMaxNumfromarray([1,2,3,4,5]))
//Function to reverse an string 
var reverseanString = function (data) {
    return data.split("").reverse().join("");
};
// console.log(reverseanString("test"));
//function to find factorial 
var factorial = function (num) {
    var num2 = 1;
    for (var i = 1; i <= num; i++) {
        num2 = num2 * i;
    }
    return "".concat(num, "! = ").concat(num2);
};
// console.log(factorial(5));
var findPrimeNumber = function (num) {
    try {
        if (num <= 1) {
            return "It is not or nor an prime or composite number";
        }
        for (var i = 2; i <= num / 2; i++) {
            if (num % num === 0) {
                return "Not an prime number";
            }
        }
        return 'it is Prime number';
    }
    catch (error) {
        console.log(error);
        return 'Something went wrong';
    }
};
var nameobj = {
    name: "Lavakumar P",
    sayhi: function (data) {
        console.log("Hi ".concat(this.name, " & ").concat(data && data));
    }
};
// console.log(nameobj.sayhi.call({name:"Balaji"}, "jack"))
// console.log(nameobj.sayhi.call({name:"Lavakumar"}, ["jack"]));
// check whether a string is palindrome or not
var checkTheStringisPalindrome = function (data) {
    if (data === void 0) { data = ""; }
    return data === data.split("").reverse().join("");
};
// console.log(checkTheStringisPalindrome("dd"));
//Reverse a given word sentance 
var reverseGivenWordSentance = function (str) {
    if (str === void 0) { str = ""; }
    return str.split(" ").reverse().join(" ");
};
console.log(reverseGivenWordSentance("Hello there it is Lavakumar"));
