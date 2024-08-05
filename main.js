var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var data = "hello";
data = "data";
var num = 1;
var arr = [{}];
var arr1 = [{}];
var valid = true;
console.log(data);
//null & undefied Data type 
var n = null;
var u = undefined;
//Array 
var list1 = [1, 2, 3, 4, 5];
var list2 = [1, 2, 3, 4, 5];
//tuple in array (Order of the value should match with order of the value)
console.log("--tuple in array (Order of the value should match with order of the value)--\n\n");
var list3 = [1, "data"];
//enum is a special "class" that represents a group of constants
console.log("--An enum is a special \"class\" that represents a group of constants--\n\n");
var datas;
(function (datas) {
    datas["red"] = "hello";
    datas["blue"] = "ss";
    datas["green"] = "ssss";
})(datas || (datas = {}));
console.log(datas.red);
//any to assign any dynamic value to the variable 
console.log("--any to assign any dynamic value to the variable--\n\n");
var convert = 6;
console.log(convert);
convert = true;
console.log(convert);
// unknown is more disciplined. It won’t let you willy-nilly perform operations on it. You need to prove its identity first!
console.log("--unknown is more disciplined. It won\u2019t let you willy-nilly perform operations on it. You need to prove its identity first!--\n\n");
var mydata = "10";
//Before do some operation we need to tell & confirm this data type 
mydata.toLowerCase();
// Multi type is used to give multiple types to one variable (Union of types)
console.log("--Multi type is used to give multiple types to one variable!(Union of types)--\n\n");
var multiType;
multiType = 10;
console.log(multiType);
multiType = "10";
console.log(multiType);
// Functions in typescript
console.log("--Functions in typescript--\n\n");
function addNum(num1, num2, num3) {
    if (num3 === void 0) { num3 = 18; }
    if (num1 && num2 && num3) {
        return num1 + num2 + num3;
    }
    else {
        return num1 ? num1 : num2 ? num2 : 0;
    }
}
var out1 = addNum(1, 2);
// InterFace in typescript
console.log("--InterFace in typescript--\n\n");
var PrintName = function (person) {
    console.log("".concat(person.firstName, " ").concat(person.lastname));
};
PrintName({ firstName: 'lavakumar', lastname: 'P' });
// Class in typescript
console.log("--Class in typescript--\n\n");
var EmployeeData = /** @class */ (function () {
    function EmployeeData(name) {
        this.employeeName = name;
        this.staticmsg = "Hi i am private msg";
    }
    EmployeeData.prototype.greet = function () {
        console.log("Welcome ".concat(this.employeeName));
    };
    EmployeeData.prototype.getstaticmsg = function () {
        console.log(this.staticmsg);
    };
    return EmployeeData;
}());
var newEmp = new EmployeeData("Rajkumar");
newEmp.greet();
newEmp.getstaticmsg();
//Access Modifires in Class 
//Public - all inheritated class & user who create new & inside class have access
//Private - Only that perticular class & member have access
//Protected - that class & inherited class only have access
var MangerData = /** @class */ (function (_super) {
    __extends(MangerData, _super);
    function MangerData(ManagerName, skill) {
        var _this = _super.call(this, ManagerName) || this;
        _this.skils = skill;
        return _this;
    }
    MangerData.prototype.getAllskills = function () {
        console.log(this.skils);
    };
    return MangerData;
}(EmployeeData));
var newManager = new MangerData("Balaji", ["javascript", "Typescript"]);
newManager.greet();
newManager.getAllskills();
newManager.getstaticmsg();
