let data: string = "hello";
data = `data`;
let num: number = 1;
let arr: Array<object> = [{}];
let arr1: object[] = [{}]
let valid: boolean = true;
console.log(data);

//null & undefied Data type 
let n:null = null;
let u:undefined = undefined;

//Type Aliases: You can create custom types using the type keyword. 
console.log("Type Aliases: You can create custom types using the type keyword.");
type ID = string | number;
let userId: ID = 123;
console.log(userId);
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

// Multi type is used to give multiple types to one variable (Union of types)
console.log(`--Multi type is used to give multiple types to one variable!(Union of types)--\n\n`);
let multiType : number|string ;
multiType = 10;
console.log(multiType);
multiType = "10";
console.log(multiType);

// Functions in typescript
console.log(`--Functions in typescript--\n\n`);

function addNum(num1:number, num2?:number, num3:number = 18):number{
    if(num1 && num2 && num3){
        return num1+ num2 + num3;
    }else{
        return num1 ? num1 : num2 ? num2 : 0;
    }

}

let out1:number = addNum(1,2);

// InterFace in typescript
console.log(`--InterFace in typescript--\n\n`);

interface Person{
    firstName:string,
    lastname?:string,
}

const PrintName = (person:Person) =>{
    console.log(`${person.firstName} ${person.lastname}`);
}

PrintName({firstName:'lavakumar',lastname:'P'});

// Class in typescript
console.log(`--Class in typescript--\n\n`);

class EmployeeData {
    employeeName:string;
    private staticmsg:string;
    constructor(name:string){
     this.employeeName = name;
     this.staticmsg = "Hi i am private msg"
    }

    greet(){
        console.log(`Welcome ${this.employeeName}`);
    }

    getstaticmsg (){
        console.log(this.staticmsg);
    }
}



let newEmp = new EmployeeData("Rajkumar");
newEmp.greet();
newEmp.getstaticmsg();


//Access Modifires in Class 
//Public - all inheritated class & user who create new & inside class have access
//Private - Only that perticular class & member have access
//Protected - that class & inherited class only have access

class MangerData extends EmployeeData{
    skils:string[];
    constructor(ManagerName:string, skill:string[]){
      super(ManagerName);
      this.skils = skill;
    }
    getAllskills (){
        console.log(this.skils);
    }
} 

let newManager = new MangerData("Balaji",["javascript","Typescript"]);
newManager.greet();
newManager.getAllskills();
newManager.getstaticmsg();
