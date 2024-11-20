//Find duplicate in array using Filter

let data = [1,2,3,4,4,5,5,6]

let duplicate = data.filter((num,inx)=> data.indexOf(num) !== inx);
console.log(duplicate);

//Remove Duplicate from an Array 
let withoutDuplicate = [...new Set([...data])];
console.log(withoutDuplicate)