/*
 * @Author: your name
 * @Date: 2021-11-08 18:30:40
 * @LastEditTime: 2021-11-08 18:37:14
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /code/Vue/响应式.js
 */

let target = 1
const obj = {a:1}


Object.defineProperty(obj,'a',{set(val){ target = val; console.log('set')},get(){ console.log('get'); return target}})
obj.a = {b:1}

console.log(obj.a.c = 1,obj.a.c);