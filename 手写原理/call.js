/*
 * @Author: your name
 * @Date: 2021-11-18 21:04:14
 * @LastEditTime: 2021-11-19 14:38:34
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /code/手写原理/call.js
 */
Function.prototype.myCall = function(_that,args){
    _that.a = this;
    _this.a(args);

}

({
    a:1
}).c = function(){
    console.log(this.a)
}


