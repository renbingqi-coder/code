// 数组扁平化
let arr = [1, 2, [2, 3], {
    a: 1
}];
console.log(arr.flat(Infinity));

// arr.toString().split(",").join(",");
//利用join将其转化为字符串  再分割
console.log(arr.toString().split(",").map((el) => {
    return Number(el);
}))

jconsole.log(arr.join(",").split(",").map((el) => {
    return Number(el);
}))

//递归  判断是不是数组  
function flatten(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            res = [...res, ...flatten(arr[i])]
        } else {
            res.push(arr[i])
        }
    }
    return res;
}
console.log(flatten([1, 2, [2, 3], {
    a: 1
}]))
// 正则  split map
console.log(JSON.stringify(arr).replace(/\[|\]/g, "").split(",").map((el) => {
    return Number(el)
}))

//展开运算符 arr = [...arr]
function flatten1(arr) {
    //当里面存在数组
    while (arr.some((el) => Array.isArray(el))) {
        arr = [].concat(...arr);
    }
    return arr;
}

//reduc
// funciton flatten(arr){
//     while()
// }
console.log(flatten1([1, 2, [2, 3], {
    a: 1
}]));

Array.prototype._falt = function (index) {
    return this.reduce((pre, cur) => {
        return index !== 0 ? Array.isArray(cur) ? [...pre, ...cur._falt(--index)] : [...pre, cur] : [...pre, cur];
    }, [])
}