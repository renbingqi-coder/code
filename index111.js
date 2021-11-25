/*
 * @Author: your name
 * @Date: 2021-11-19 19:53:43
 * @LastEditTime: 2021-11-19 20:34:21
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /code/index111.js
 */
function myReserve(str){
    for(let i = 0; i < str.lenght; i++){
        
    }
    return str.split('').reverse().join();
}


//实现一个方法fn(1)(2)(3)(4)(...)(n)() ，输出前n个参数累加和

function add(...args1){
    let sum = args1.reduce((pre,cur)=>pre+cur,0)
    return function fn(...args2){
        if(args2.length===0)
            return sum;
        else
            sum = [sum,...args].reduce((pre,cur)=>pre+cur,0)
            return fn;
    }
}


class A<T>{
    
}

A<String>


console.log(add(1)(2)())
