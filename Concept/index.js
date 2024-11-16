
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
  throttledWindowResize(100);
  throttledWindowResize(150);
  throttledWindowResize(200);
  
  setTimeout(() => {
      throttledWindowResize(1500);   
  }, 2000);