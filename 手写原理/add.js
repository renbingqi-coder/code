/*
 * @Author: your name
 * @Date: 2021-11-18 20:26:09
 * @LastEditTime: 2021-11-18 20:34:55
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /code/手写原理/add.js
 */
// 题目描述：实现一个 add 方法 使计算结果能够满足如下预期：

// add(1)(2)(3)()=6
// add(1,2,3)(4)()=10


function add(...arg1){
    
    //返回一个函数
    return function fn(...arg2){
        // 判断是否有参数 
        if(!arg2.length) 
            return arg1.reduce((pre,cur)=>pre+cur,0);
        else
            arg1 = [...arg1,...arg2]
            return fn;
    }
}

// 测试
console.log(add(1)(2)(3)())
console.log(add(1, 2)(3)())
