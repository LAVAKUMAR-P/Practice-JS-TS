//Add 2 numbers
const addTwoNumbers = (num1: number, num2: number): number | string => {
  try {
    return num1 + num2;
  } catch (error) {
    console.log(error);
    return "something went wrong";
  }
};

// console.log(addTwoNumbers(1,2))

//Write a JavaScript program to find the maximum number in an array.

const findMaxNumfromarray = (data: Array<number>): number | string => {
  try {
    let num: number = Math.max(...data);
    return num;
  } catch (error) {
    console.log(error);
    throw new Error("something went wrong");
  }
};

// console.log(findMaxNumfromarray([1,2,3,4,5]))

//Function to reverse an string
const reverseanString = (data: string): string => {
  return data.split("").reverse().join("");
};

// console.log(reverseanString("test"));

//function to find factorial
const factorial = (num: number): string => {
  let num2: number = 1;
  for (let i = 1; i <= num; i++) {
    num2 = num2 * i;
  }
  return `${num}! = ${num2}`;
};
// console.log(factorial(5));

const findPrimeNumber = (num: number): string => {
  try {
    if (num <= 1) {
      return "It is not or nor an prime or composite number";
    }

    for (let i: number = 2; i <= num / 2; i++) {
      if (num % num === 0) {
        return "Not an prime number";
      }
    }
    return "it is Prime number";
  } catch (error) {
    console.log(error);
    return "Something went wrong";
  }
};

// console.log(findPrimeNumber(17));

//call & apply
type objs = {
  name: string;
  sayhi: (data?: string | string[]) => void;
};
const nameobj: objs = {
  name: "Lavakumar P",
  sayhi: function (data?: string | string[]) {
    console.log(`Hi ${this.name} & ${data && data}`);
  },
};

// console.log(nameobj.sayhi.call({name:"Balaji"}, "jack"))
// console.log(nameobj.sayhi.call({name:"Lavakumar"}, ["jack"]));

// check whether a string is palindrome or not

const checkTheStringisPalindrome = (data: string = ""): boolean => {
  return data === data.split("").reverse().join("");
};

// console.log(checkTheStringisPalindrome("dd"));

//Reverse a given word sentance

const reverseGivenWordSentance = (str: string = ""): string => {
  return str.split(" ").reverse().join(" ");
};

// console.log(reverseGivenWordSentance("Hello there it is Lavakumar"))

// Program to find longest word in a given sentence
const findLargestWordInSentance = (sentance: string): string => {
  let words: string[] = sentance.split(" ");
  let largestWord: string = "";
  for (let word of words) {
    if (largestWord.length < word.length) {
      largestWord = word;
    }
  }
  return largestWord;
};

console.log(findLargestWordInSentance("Hello there it is Lavakumar"));

//Find prime number

const findPrimeNumbers = <T>(num: number): string => {
  if (num === 1) {
    return "Non a prime or composite";
  }
  let prime = true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      prime = false;
      break;
    }
  }
  return prime ? "Prime number" : "Not prime";
};

// console.log(findPrimeNumbers(3))

//Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.

const findEvenNumbersFromAnArray = (arr1: number[] = []): number[] => {
  let out: number[] = [];
  for (let num of arr1) {
    if (num % 2 === 0) {
      out.push(num);
    }
  }
  return out;
};


console.log(findEvenNumbersFromAnArray([1,2,3,4,5,6]))