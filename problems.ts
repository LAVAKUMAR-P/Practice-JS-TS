//Add 2 numbers 
const addTwoNumbers = (num1:number,num2:number):number|string =>{
    try {
       return num1+num2
    } catch (error) {
        console.log(error);
        return "something went wrong"
    }
}

console.log(addTwoNumbers(1,2))

//Write a JavaScript program to find the maximum number in an array. 

const findMaxNumfromarray = (data:Array<number>):number|string =>{
    try {
        let num:number = Math.max(...data);
        return num
    } catch (error) {
        console.log(error);
        throw new Error("something went wrong")
    }
}

console.log(findMaxNumfromarray([1,2,3,4,5]))

//Function to reverse an string 
const reverseanString = (data:string) : string =>{
  return data.split("").reverse().join("")
}

console.log(reverseanString("test"));

//function to find factorial 
const factorial = (num:number):string =>{
    let num2:number = 1;
    for(let i = 1; i<=num ; i++){
        num2 = num2 * i;
    }
    return `${num}! = ${num2}`
}
console.log(factorial(5));