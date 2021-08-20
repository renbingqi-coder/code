// 1、实现随机洗牌算法
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function shuffle(arr) {
  return arr.sort((a, b) => {
    return Math.random() - 0.5;
  })
}
shuffle(arr)
// console.log(shuffle(arr));
// //输出 [4, 6, 3, 2, 0, 9, 5, 1, 7, 8] 每次结果都是随机的

// 2、实现一个解析url参数的函数
function parseUrl(urlStr) {
  const urlArr = urlStr.split("?")
  let queryArr = urlArr.length > 1 ? urlArr[1].split("&") : [];
  queryArr[queryArr.length - 1] = queryArr[queryArr.length - 1].split("#")[0];
  return queryArr.length > 0 ? queryArr.reduce((pre, cur) => {
    const key = cur.split("=")[0];
    const value = cur.split("=")[1];
    return {
      ...pre,
      [key]: value ? value : null,
    }
  }, {}) : {};
}

// console.log(parseUrl('https://cloud.tencent.com?a=1&b=2&c=#abc'));
// 返回 {a: 1, b: 2, c: 3}
// // 除了上面这个测试的例子，你还想到哪些例子


// 3、完成函数 flatten，接受数组作为参数，数组元素包含整数或数组，函数返回扁平化后的数组
// function flatten(arr) {
//     return arr.join(",").split(",").map(el=>Number(el));
// }
// let arr1 = [];


function flatten(arr,index) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])&&index-->0) {
      newArr.push(...flatten(arr[i],index));
    }else{
      newArr.push(arr[i])
    }
  }
  return newArr   //出口
}
// console.log(flatten([1, [2, [3, 4], 5], 6], 100000));

function fatten1(arr){
   return arr.reduce((pre,cur)=>{
        cur = Array.isArray(cur)?fatten1(cur):[cur];
        return [...pre,...cur]
    },[]);
}

let arr11 = 11
console.log();

fatten1([1, [2, [3, 4], 5], 6])



Function.prototype.myBind=function (that,...arr){
    return ()=>this.call(that,...arr);
}
function a(){
}
a.myBind({a:2})()

function MyPromise(){
    return 
}
class MyPromise{
}