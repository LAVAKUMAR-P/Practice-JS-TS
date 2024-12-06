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

const checkPrimeorNot = (num )=>{
  if(num === 1){
    return "Number is Nor composite or Prime"
  }else{
    for(let i =2 ; i<= num/2; i++){
       if(num%i === 0){
        return "Number is not an prime number"
       }
    }
  }
  return 'number is prime number'
}

// console.log(checkPrimeorNot(4))



//Eg : own version of map (Polyfill)

Array.prototype.myMap = function(callback){
  let array = [];
  for (let index = 0; index < this.length; index++) {
    array.push(callback(this[index],index,this))
  }
  return array
}

// console.log([1,2,3].myMap((data)=> data*2))
// console.log([1,2,3].map((data)=> data*2))

//Eg : own version of filter (Polyfill)

Array.prototype.myFilter = function(callback){
  let array = [];
  for (let index = 0; index < this.length; index++) {
    if(callback(this[index],index,this)){
      array.push(this[index])
    }    
  }
  return array
}

// console.log([1,2,3].filter(num => num % 2 === 0))
// console.log([1,2,3].myFilter(num => num % 2 === 0))

//Function to reverse string without using in build methord
const reverseString = (str="") =>{
  let newarr = str.split("");
  let newStr = ""
  for(let i = newarr.length-1; i >= 0; i--){
      newStr = newStr+newarr[i]
  }
  
  return newStr
}

console.log(reverseString("lava"));
console.log("lava".split("").reverse().join(""))