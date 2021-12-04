//创建对象
// 1. Factory function
function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log("draw");
        }
    }
}

const circle1 = createCircle(1);
console.log('circle1',circle1);

const circle2 = createCircle(2);
console.log('circle2',circle2);


// 2. Constructor function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}
/**
 * 1. new 首先创造了一个空的对象
 * 2. 将 Circle 中的 this 指向该空对象
 * 3. 通过 Circle 函数返回该对象
 */
const circle3 = new Circle(9);
console.log('circle3',circle3);


//上面的代码和下面的代码相同
// const Circle1 = new Function('radius',
//     `this.radius = radius;
//     this.draw = function() {
    //         console.log('draw');
    //     }`
// );
// const circle4 = new Circle1(9);
// console.log('circle4',circle4);

let c = Circle.call({}, 3);
console.log(c);
Circle.apply({}, [1, 2, 3]);




//对象可以动态变化，创建之后还可以给其添加属性和方法
const circle = {
    radius : 10,
    draw() {
        console.log("draw");
    }
}

circle.color = 'red';
console.log('circle',circle);

delete circle.color;

console.log('=============');
let obj = {};
//js会将其转化为 : let ojb = new Object();



//js中 function 也是对象, function 中使用 Function() 该构造函数创建新函数
console.log(Circle.constructor);   // ƒ Function() { [native code] }
console.log(circle.constructor);   // ƒ Object() { [native code] }



// 值类型和引用类型，值类型赋值的是值，引用类型赋值的是它的地址

console.log('=============');
//Object.keys() 返回 String[] 数组
for (let key of Object.keys(circle))
    console.log(key, circle[key]);

//Object.entries() 返回由键值对组成的数组
for (let entry of Object.entries(circle))
    console.log(entry);

//查看对象中是否有某个属性或方法
if ('draw' in circle) 
    console.log('Yes');

// clone 对象
1.
// const another = {};
// for (let key in circle)
//     another[key] = circle[key];
2. //使用 Object.assign()
// const another = Object.assign({}, circle);
3. //使用展开符 ...
const another = { ...circle };
console.log(another);

// Garbage collection : js中具有自动垃圾回收机制


console.log(Math.random());
console.log(Math.max(1, 2, 3, 4, 5));

// String primitive
const str1 = 'hello';
console.log(typeof str1);  //string

// String Object
const str2 = new String('hello');
console.log(typeof str2);   //object

console.log(str1.includes('he'));
console.log(str1.startsWith('h'));

console.log(str1.replace('h', 'H'));

// Template 模板语法
let name = 'JavaScript';
const str3 = 
`Hello
${name} ${1 + 2}`
 console.log(str3);


 // Date 日期  注意：月份是以 0 开始的
const now = new Date();   //Sat Dec 04 2021 17:40:05 GMT+0800 (中国标准时间) {}
const date1 = new Date(2022, 0, 15, 9);  //Sat Jan 15 2022 09:00:00 GMT+0800 (中国标准时间)
now.toDateString();  // 'Sat Dec 04 2021'
now.toISOString();   // '2021-12-04T09:52:34.054Z'  ISO格式，常用于网络服务
now.getDay();

//练习

//使用 {} 创建 address 对象
let address = {
    street : 'a',
    city : 'b',
    country : 'c'
};

//使用工厂函数创建 address 对象
function createAddress(street, city, country) {
    return {
        street : street,
        city : city,
        country : country
    }
}
let address1 = createAddress('秦唐', `Xi'an`, 'China');

//使用构造函数创建 address 对象
function Address(street, city, country) {
   this.street = street;
   this.city = city;
   this.country = country;
}
let address2 = new Address('骊山', `Xi'an`, 'China');
let address3 = new Address('骊山', `Xi'an`, 'China');

function areEqual(address1, address2) {
    for (let i in address1) {
        if (address1[i] !== address2[i])
            return false;
    }
    return true;
}
areEqual(address2, address3);  // true

function areSame(address1, address2) {
    return address1 === address2;
}
areSame(address2, address3);  // false

//创建博客对象
let blog = {
    title : 'a',
    body : 'b',
    author : 'Jack',
    views : 10,
    comments : [
        { author : 'John', body : '拜读神作'},
        { author : 'Tom', body : '顶一个'}
    ],
    isLive : true
};

let priceRanges = [
    { label : '$', tooltip : 'Inexpersive', minPerPerson : 0, maxPerPerson : 10},
    { label : '$$', tooltip : 'Moderate', minPerPerson : 11, maxPerPerson : 25},
    { label : '$$$', tooltip : 'Expensive', minPerPerson : 26, maxPerPerson : 50}
];
