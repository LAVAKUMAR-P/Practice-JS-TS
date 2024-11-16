
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