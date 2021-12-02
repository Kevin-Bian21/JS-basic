console.log("Hello World!");
let Name = 'Kevin';
console.log(Name);

const Rate = 0.3;

//基本类型
String
Number
Boolean
undefined
null

//引用类型
Object
Array
Function


let person = {
    name: 'Kevin',
    age : 22
}
person.name = 'kevin';
person['name'] = 'John';

let colors = ['red','green'];
colors[2] = 'blue';
console.log(colors[0]);

function greet(name) {
    console.log("Hello " + name);
}
greet('Kevin');

//======操作符======
//赋值
/* = += -= *= /=  */

//比较
/* > < >= <= === !==

//js中的类型为动态类型：类型定义之后还可以更改
let name = "Kecin";
typeof name  // string
name = 1;  
typeof name  //number
