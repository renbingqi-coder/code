/*
 * @Author: your name
 * @Date: 2021-10-07 14:55:10
 * @LastEditTime: 2021-11-18 21:38:24
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /code/JS/map.js
 */
let map = new Map();
let key = new Array(5 * 1024 * 1024);
map.set(key, 1);

// arr = Array.from({length: 999999}).map(v=>Math.random().toString())
// arr = Array.from({length: 999999}).map(v=>999999 * Math.random() >>> 0)
console.log('------------------------------------')
arr = Array.from({length: 999999}).map(v=>Math.random().toString())
console.time('map-for of');
map = new Map();
for(let value of arr){
    map.set(value, value);
}
console.timeEnd('map-for of')

console.time('obj-for of');
obj = {};
for(let value of arr){
    obj[value] = value;
}
console.timeEnd('obj-for of')

console.log('------------------------------------')
arr = Array.from({length: 999999}).map(v=>999999 * Math.random() >>> 0)
console.time('map-for of');
map = new Map();
for(let value of arr){
    map.set(value, value);
}
console.timeEnd('map-for of')

console.time('obj-for of');
obj = {};
for(let value of arr){
    obj[value] = value;
}
console.timeEnd('obj-for of')

console.log('------------------------------------')
arr = Array.from({length: 999999}).map(v=>(999999 * Math.random() >>> 0).toString())
console.time('map-for of');
map = new Map();
for(let value of arr){
    map.set(value, value);
}
console.timeEnd('map-for of')

console.time('obj-for of');
obj = {};
for(let value of arr){
    obj[value] = value;
}
console.timeEnd('obj-for of')

console.log('------------------------------------')
console.time('map-for');
map = new Map();
for(let value = 0; value < 999999; value++){
    map.set(value, value);
}
console.timeEnd('map-for')

console.time('obj-for');
obj = {};
for(let value = 0; value < 999999; value++){
    obj[value] = value;
}
console.timeEnd('obj-for')

map = null;obj = null;

// obj = {}
// symbo1 = Symbol(1);
// symbo12 = Symbol(1);
// symbo123 = symbo12;
// obj[symbo1] = 1
// obj[symbo12] = 2

// map = new Map();
// map.set(symbo1, 1)
// map.set(symbo12, 2)
// console.log(obj, map, obj[symbo1], map.get(symbo1), map.get(symbo123), obj[symbo123]);
// console.log(symbo1,symbo12,symbo123)

