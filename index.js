console.log("Hello World!");
let Name = 'Kevin';
console.log(Name);

const Rate = 0.3;

//基本类型
String
Number
Boolean
Symbol
undefined
null

//引用类型
Object
Function
Array


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

//for...of:for-of中迭代变量直接表示一个元素，主要用在可枚举的类型，例如数组和map
for (let color of colors)
    console.log(color);

    
function getMaxValue(a, b){
    return a > b ? a : b;
}
console.log(getMaxValue(0, 1));

function fizzBuzz(input) {
    if (typeof input !== "number")
        return NaN;
    if ( (input % 3 === 0) && (input % 5 === 0) )
        return 'FizzBuzz';
    else if (input % 3 === 0)
        return 'Fizz';
    else if (input % 5 === 0)
        return 'Buzz';
    else 
        return input;
}

console.log(fizzBuzz(5));

function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;
    if(speed < speedLimit + kmPerPoint)
        return 'OK';
    
    let points = Math.floor((speed - speedLimit) / kmPerPoint);
    return points >= 12 ? 'License suspended' : points;
}
console.log(checkSpeed(74));

//统计类真值或者类假值
const array = [0, null, undefined, '', 2, 3];
function countTruthy(array) {
    let count = 0;
    for (let value of array) {
        if (value)
            count ++;
    }
    return count;
}
console.log(countTruthy(array));


const movie= {
    title: 'God',
    releaseYear: 2020,
    rating: 8.9
}
function showProperties(obj) {
    for (let key in obj) {
        console.log(key, obj[key], typeof obj[key]);
    }
}
showProperties(movie);

//分数等级
const marks = [80, 80, 50];
function calculateGrade(marks) {
    let avg = 0;
    let sum = 0;
    for (let score of marks)
        sum += score;
    avg = sum / marks.length;
    
    return (avg >= 90) ? 'A' : (avg >= 80) ? 'B' : (avg >= 70) ? 'C' : (avg >= 60) ? 'D' : 'E'; 
}
console.log(calculateGrade(marks));


//打印星星
function showStarts(rows) {
    for (let i = 0; i < rows; i++) {
        let pattern = '';
        for(let j = 0; j <= i; j++)
            pattern += '*';
        console.log(pattern);
    }
}
showStarts(5);

//显示质数
function showPrimes(limit) {
    for (let num = 2; num <= limit; num ++){
        if (isPrime(num))
            console.log(num);
    }
}
function isPrime(number) {
    for (let factor = 2; factor < number; factor ++) {
        if (number % factor === 0)
            return false;
    }
    return true;
}

showPrimes(20);