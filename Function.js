// function declaration
function walk() {
    console.log('Walking');
}

// 函数表达式 anonymous function expression 匿名函数
let run = function () {
    console.log('run');
}
run();
// 函数声明和函数表达式的区别，使用函数声明可以在该函数定义之前调用，使用函数表达式则必须在定义之后调用
//这是由于js引擎会将所有的函数声明提前到代码顶端，即js中的Hoisting

//function arguments
function sum() {
    let total = 0;
    console.log(arguments);
    for (let value of arguments)
        total += value;
    return total;
}

console.log(sum(1, 3, 5));

// 余下（rest）参数,余下参数必须为函数最后一个参数
function sum1(discount, ...prices) {
    const total = prices.reduce((x, y) => x + y);
    return total * discount;
}
console.log(sum1(0.9, 30, 50, 20));

//默认参数
function interest(principal, rate, years) {
    //可以使用逻辑或来指定参数的默认值
    rate = rate || 0.3;
    years = years || 10;
    return principal * rate * years;
}

console.log(interest(1000));  // 3000
console.log(interest(1000, undefined, 5)); // 1500

//ES6 之后可以直接在参数上写
function interest1(principal, rate = 0.3, years = 10) {
    return principal * rate * years;
}
console.log(interest(1000, 0.2)); // 2000


//Getter and Setter
const person = {
    firstName : 'WenKai',
    lastName : 'Bian',
    get fullName() {
        return `${person.lastName} ${person.firstName}`;
    },
    set fullName(value) {
        if (typeof value !== 'string')
            throw new Error('Value is not a string.');
        
        const array = value.split(' ');
        if (array.length !== 2)
            throw new Error('Enter a firtName and lastName');
        this.lastName = array[0];
        this.firstName = array[1];
    }
};

// try catch
try {
    person.fullName = null;
} catch (e) {
    //alert(e);
}
console.log(person);


// scope 作用域
const color = 'red';
function scope() {
    //本地局部变量或者常量会自动覆盖同名的全局变量或者常量
    const color = 'blue';
    console.log(color);  //  blue
    for (var i = 1; i <= 3; i++)
        console.log(i);

    console.log(i);   // 4
}
scope();

// let  var
var 的作用域不再是它被定义的代码块中;
let 的作用域为它所属的函数的作用域;
// 因此， let const 作用于块中， var 作用于整个函数块中

// console.log(i);  // i is not defined


// 如果使用var定义全局变量,则该变量会加入到 window 对象中;
// 但是使用let定义全局变量,该变量并不会加入到 window 对象中;
// 我们声明的函数一般都被添加到 window 对象中了，为了避免这种情况，应该将函数封装到 Modules 
var name = 'bian';
let age = 22;
console.log(window.name);  // bian
console.log(window.age);   // undefined


// this   引用了执行当前函数的对象实例

// method -> obj
// function -> gloabl (window , global)
const video = {
    title : 'a',
    play : function () {
        console.log(this);  // 当前的video对象
    }
}
video.play();


function show() {
    console.log(this);  // Window
}
show();


function Movie (title) {
    this.title = title;
    console.log(this);  // Movie 对象
}
const movie = new Movie('God');  // {}   this -> {}


const music = {
    title : 'trouble is friend',
    tags : ['a', 'b', 'c'],
    show () {
        //加入forEach中没有第二个参数的话，我们可以在外面将this定义为常量，然后再回调函数中使用该常量
        // const self = this;
        this.tags.forEach( function(tag) {  // 该处的this指向当前music对象
            console.log(this.title, tag);   // 该处的this由于在回调函数中，而该回调函数是一个普通函数，所以它指向的是window对象
            // console.log(self.title, tag);
        }, this);  //为了解决回调函数中this的问题，可以在forEach中第二个参数处将music对象传入到回调函数中，即this
    }
}
// Function.js:139 undefined 'a'
// Function.js:139 undefined 'b'
// Function.js:139 undefined 'c'
music.show();


function playVideo() {
    console.log(this);
}
playVideo();  // this -> window
// 用指定的对象替换函数的this值，用指定的数组替换函数的参数。
playVideo.call({});  // this -> {}
playVideo.apply({});  // this -> {}  
// call 和 apply 的主要区别是，如果 function 中有参数，call({},a,b,c), apply({},[a,b,c])
const fn = playVideo.bind({});  // 对于给定函数，创建与原始函数具有相同主体的绑定函数。绑定函数的this对象与指定的对象关联，并具有指定的初始参数。
fn();


// ES6 中直接使用箭头函数就可以从当前函数中继承 this 的值， 即箭头函数内部和外部的 this 是一样的


//练习
const circle = {
    radius : 2,
    get area() {
        return Math.PI * this.radius * this.radius;
    },
    set setRadius(radius) {
        this.radius = radius;
    }
}
circle.setRadius = 10;
console.log(circle.area);


 Array.isArray([]);