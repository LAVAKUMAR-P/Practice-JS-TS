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