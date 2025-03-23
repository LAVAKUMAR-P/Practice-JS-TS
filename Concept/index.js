
//EG : Debouncing
const debounce =  (callback,delay) => {
    let timer = null;
    return (...arg)=>{
        clearInterval(timer)
        timer = setTimeout(() => {
            callback(...arg); 
        }, delay);
    }
}

const searchData = (...data)=>{
    console.log(data);
}

debounceSearch = debounce(searchData, 100);
// debounceSearch("che");
// debounceSearch("chennai");


//EG : Throttling
const throttling = (callback, delay)=>{
    let timer = null;
    return (...arg)=>{
      if(timer === null){
          callback(...arg);
      timer = setTimeout(()=>{
          timer = null
        },delay)
      }
    }
  }
  
  const validateresize = (data) => {
     // Based on window width, do UI changes
     console.log(data)
  }
  
  const throttledWindowResize = throttling(validateresize, 1000);
  
  //Consider you are calling this function from resize event listener
//   throttledWindowResize(100);
//   throttledWindowResize(150);
//   throttledWindowResize(200);
  
//   setTimeout(() => {
//       throttledWindowResize(1500);   
//   }, 2000);



/* Object.freeze() – Fully Immutable
No adding, modifying, or deleting properties */

const obj = { name: "John" };
Object.freeze(obj);
obj.name = "Doe"; //  Won't work
delete obj.name;  //  Won't work
// console.log(obj); // { name: "John" }


/* Object.seal() – Modifiable but Restricted
Allows modifying existing properties
Prevents adding or deleting properties */

const user = { age: 30 };
Object.seal(user);
user.age = 35;  //Works
user.city = "NY"; // Won't work
delete user.age;  // Won't work
console.log(user); // { age: 35 }


