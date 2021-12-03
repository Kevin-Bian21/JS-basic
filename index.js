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
/* > < >= <= === !== */

//js中的类型为动态类型：类型定义之后还可以更改
let name = "Kecin";
typeof name  // string
name = 1;  
typeof name  //number

// === //符号两边类型和值都要相同
// ==  //只会检测值是否一样，不关心是否同类型，如果类型不一样，就会将右边的类型转为左边的

//三元运算符
let money = 100;
let type = money > 100 ? "rich" : "poor";
console.log(type);

//逻辑操作 &&  ||  ！
// js中逻辑运算结果不一定要是布尔类型，取决于我们操作的数据  false || 'Kevin'
//Falsy (false) 类假 可以为undefined、null、0、false、''、NaN (非数字)

//位运算
console.log(1 | 2);
console.log(1 & 2);
console.log(~1);

/*
if (condation) {
    console.log();
}

switch (variable) {
    case '': console.log(); break;
    default: console.log();
}

for (let i = 0; i < 3; i++){
    console.log("Hello World",i);
}


*/

//for...in
for (let attr in person)
    console.log(attr, person[attr]);

for (let index in colors)
    console.log(colors[index]);

//for...of:for-of中迭代变量直接表示一个元素，主要用来遍历数组
for (let color of colors)
    console.log(color);

    
function getMaxValue(a, b){
    return a > b ? a : b;
}
console.log(getMaxValue(0, 1));