//Find duplicate in array using Filter

let data = [1,2,3,4,4,5,5,6]

let duplicate = data.filter((num,inx)=> data.indexOf(num) !== inx);
// console.log(duplicate);

//Remove Duplicate from an Array 
let withoutDuplicate = [...new Set([...data])];
// console.log(withoutDuplicate)



//EG polyfill for Custom filter
let nums = [1,2,3,4,4,5,5,6];
if (!Array.prototype.myfilter) {
    Array.prototype.myfilter = function (callback, thisArg) {
      if (this == null) {
        throw new TypeError('Array.prototype.filter called on null or undefined');
      }
      if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
      }
  
      let result = [];
  
      for (let i = 0; i < this.length; i++) {
        
          if (callback.call(thisArg, this[i], i, this)) {
            result.push(this[i]);
          }
        
      }
  
      return result;
    };
  }

  // console.log(data.filter((num,inx)=> data.indexOf(num) !== inx))
  // console.log(data.myfilter((num,inx)=> data.indexOf(num) !== inx))


//Find Prime number

const primeOrNot = (number =1)=>{
  let isPrime = true;


if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}

// check if number is greater than 1
else if (number > 1) {

    // looping through 2 to number/2
    for (let i = 2; i <= number/2; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
}

else {
    console.log("The number is not a prime number.");
}

}

primeOrNot(2)