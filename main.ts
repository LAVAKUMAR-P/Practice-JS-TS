let data: string = "hello";
data = `data`;
let num: number = 1;
let arr: Array<object> = [{}];
let valid: boolean = true;
console.log(data);

//null & undefied Data type 
let n:null = null;
let u:undefined = undefined;

//Array 
let list1 : number[]= [1,2,3,4,5];
let list2 : Array<Number>=[1,2,3,4,5];


//tuple in array (Order of the value should match with order of the value)
console.log("--tuple in array (Order of the value should match with order of the value)--\n\n")
let list3:[number,string]= [1,"data"]

//enum is a special "class" that represents a group of constants
console.log(`--An enum is a special "class" that represents a group of constants--\n\n`)
enum datas {
    red ="hello",blue ="ss",green="ssss"
}

console.log(datas.red)

//any to assign any dynamic value to the variable 
console.log(`--any to assign any dynamic value to the variable--\n\n`)
let convert : any = 6;
console.log(convert);
convert = true;
console.log(convert);

// unknown is more disciplined. It won’t let you willy-nilly perform operations on it. You need to prove its identity first!
console.log(`--unknown is more disciplined. It won’t let you willy-nilly perform operations on it. You need to prove its identity first!--\n\n`);
let mydata:unknown = "10";
//Before do some operation we need to tell & confirm this data type 
(mydata as string).toLowerCase()
