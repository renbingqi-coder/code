/*
 * @Author: your name
 * @Date: 2021-11-21 22:36:08
 * @LastEditTime: 2021-11-21 22:42:42
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /code/JS/promise.js
 */
const a = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(1)
    },2000)
})
const b = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(2)
    },1000)
})


 a.then((a)=>{
    console.log(a)
 })
 b.then((b)=>{
    console.log(b)
 })
