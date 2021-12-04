/**
 * 添加新元素
 * 查找元素
 * 删除元素
 * 拆分数组
 * 合并数组
 */

const numbers = [1, 2, 3, 2];
// End
numbers.push(4, 5); //[1, 2, 3, 2, 4, 5]
// Beginning
numbers.unshift(0);  //[0, 1, 2, 3, 2, 4, 5]
//Middle
numbers.splice(3, 0, 'a', 'b');   //[0, 1, 2, 'a', 'b', 3, 2, 4, 5]

console.log(numbers.indexOf('a'));
console.log(numbers.indexOf(2, 5));
console.log(numbers.lastIndexOf(2));
numbers.includes('b');



const courses = [
    { id : 1, name : 'Jack'},
    { id : 2, name : 'Rose'},
    { id : 3, name : 'Tom'}
];
// 返回找到第一个匹配的对象，没有匹配的则返回 undefined
const course = courses.find(function(course) {
    return course.name === 'Tom';
});
const index = courses.findIndex( course => course.name === 'Tom');



// End
let last = numbers.pop();  // 5
// Beginning
let first = numbers.shift();  // 0
// Middle  从 index = 2 开始删除两个元素
let arr = numbers.splice(2, 2);  // ['a', 'b']
console.log(numbers);



let num = [1, 2, 3];
let another = num;
1. // 这种方式下，num不能有其他引用
//num = [];
2. // recommend
num.length = 0;
3.
//num.splice(0, numbers.length);
4.
// while (num.length > 0)
//     num.pop();



const First = [1, 2, 3];
const Second = [4, 5, 6];
const combined = First.concat(Second);  // [1, 2, 3, 4, 5, 6]
const combin = [...First, ...Second];  // [1, 2, 3, 4, 5, 6]
const slice = combined.slice(2, 5);  // [3, 4, 5]  值类型复制值，对象类型复制它们的引用
const copy = combined.slice();


//forEach()
numbers.forEach(x => console.log(x));

//join() 该方法返回字符串类型
const joined = numbers.join('-'); // '1-2-3-2-4'
const parts = joined.split('-');  // ['1', '2', '3', '2', '4']

//如果是对象类型，则默认不起作用
numbers.sort();
console.log(numbers);  // [1, 2, 2, 3, 4]
numbers.reverse();
console.log(numbers);   // [4, 3, 2, 2, 1]


// courses.sort(function(a, b) {
//     // a < b ==> -1
//     // a > b ==> 1
//     // a === b ==> 0
//     if (a.id > b.id) return -1;
//     if (a.id < b.id) return 1;
//     return 0;
// });
courses.sort((x, y) => y.id - x.id);
console.log(courses);
/*
0: {id: 3, name: 'Tom'}
1: {id: 2, name: 'Rose'}
2: {id: 1, name: 'Jack'}
length: 3
*/

numbers.push(-1);
// ervry() 判断数组中的元素是否为权威正数
const allPositive = numbers.every(value => value >= 0);

// some() 检查数组中至少有一个元素符合该条件
const asLeastOenPositive = numbers.some(value => value >= 0);

// filter() 过滤元素
const filtered = numbers.filter(value => value >= 3);
console.log(filtered);  // [4, 3]

// map() 映射
let items = filtered
    .map(value => `<li>${value}</li>`)
    .map(n => obj = {value : n});
// 如果只使用 {} ，js会认为这是代码块，而非一个对象。可以像下面这样，也可以将对象使用 () 括起来 ({value : n}) 
console.log(items);


console.log(numbers); // [4, 3, 2, 2, 1, -1]
// Array 求和 , 第二个参数为 accumlator 的初始值，如果不指定，则默认为数组的第一个元素，currentValue为紧接着的第二个元素
const sum = numbers.reduce((accumulator, currentVlue) => accumulator + currentVlue, 0); // 11


//练习
function arrayFromRange(min, max) {
    let array = [];
    while (min <= max) {
        array.push(min);
        min += 1;
    }
    return array;
}
const array = arrayFromRange(-3, 3);  
console.log(array);   // [-3, -2, -1, 0, 1, 2, 3]

function includes(array, searchElement) {
    for (let value of array) {
        if (value === searchElement)
            return true;
    }
    return false;
}
console.log(includes(array, 5));  // false


function except(array, excluded) {
    let arr = [];
    for (let i of array) {
        isValid = true;
        for (let j of excluded) {
            if (i === j)
                isValid = false;
        }
        if (isValid)
            arr.push(i);
    }
    return arr;
}
console.log(except(array, [0, 1, 5]));  // [-3, -2, -1, 2, 3]


function move(array, index, offset) {
    const postion = index + offset;
    if (postion >= array.length || postion < 0) {
        console.error("Invalid offset")
        return;
    }

    let output = [...array];
    let element = output.splice(index, 1)[0];
    output.splice(index + offset, 0, element);
    
    return output;
}
const output = move(array, 3, -3);
console.log("move",output);  // [0, -3, -2, -1, 1, 2, 3]


function countOccurrences(array, searchElement) {
    return array.reduce((accumulator, currentVlue) => {
        const count = (currentVlue === searchElement) ? 1 : 0;
        // console.log(count);
        return accumulator + count;
    }, 0);
}
console.log(countOccurrences(array, 1));  // 1


function getMax (array) {
    if (array.length <= 0)
        return undefined;
    return array.reduce((max, current) => (max > current) ? max : current);
}
console.log(getMax(array));  // 3


const movies = [
    { title : 'a', year : 2020, rate : 7.5},
    { title : 'b', year : 2020, rate : 8.5},
    { title : 'c', year : 2020, rate : 6.0},
    { title : 'd', year : 2021, rate : 7.5}
];

const movie = movies
    .filter(obj => obj.rate >= 7 && obj.year === 2020)
    .sort((x, y) => y.rate - x.rate)
    .map(obj => obj.title);

console.log(movie);