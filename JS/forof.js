/*
 * @Author: your name
 * @Date: 2021-11-15 15:01:16
 * @LastEditTime: 2021-11-15 15:02:17
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /code/JS/forof.js
 */

function t(){
for (const i of [1,2]) {
    console.log(22);
    if(i===1)
        return i
}
}
console.log(t());
