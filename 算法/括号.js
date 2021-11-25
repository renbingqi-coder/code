/*
 * @Author: your name
 * @Date: 2021-11-15 18:27:30
 * @LastEditTime: 2021-11-18 12:45:49
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /code/算法/括号.js
 */
function test(str){
    const map = {
        '{':'}',
        '[':']',
        '(':')'
    };
    const stack = []
    const mapKey = Object.keys(map)
    for(let i of str){
        if()
        if(mapKey.includes(i)){
            stack.push(i)
        }
    }
}