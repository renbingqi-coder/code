//利用闭包实现柯里化
// curry:柯里化  用户固定某个函数的前面的参数,得到一个新的函数,新的函数被调用时,会接受剩余的参数

//1.传入原来函数  与要固定的参数
//2.返回一个新的函数(当前函数已有固定的参数)    调用该函数在新的函数中传入剩下的参数   判断当前所有参数是否等于原来参数  
//     大于等于  返回函数执行结果
//     小于  继续进行柯里化   返回一个新的函数  重复步骤2
/**
 * 
 * @param {
 * } func  要柯里化的函数
 * @param  {...any} args   要固定的参数
 * @returns   固定完参数的函数  接受剩余参数
 */
function curry(func, ...args) {
    return function (...subArgs) {
        //判断当前所有参数是否大于等于函数原来的参数  
        if ([...args, ...subArgs].length >= func.length) {
            //返回执行结果
            return func(...args, ...subArgs);
        } else {
            //小于  继续进行柯里化  
            return curry(func, ...args, ...subArgs);
        }
    }
}

function cal(a, b, c, d) {
    return a + b * c - d;
}
const newCal = curry(cal, 1, 2); //固定 a=1 b=2
console.log(newCal(3, 4)); //传入剩余参数   输出3
const newCal1 = newCal(8) // 固定 c = 8
console.log(newCal1(9)); //传入剩余参数   输出8
console.log(curry(cal, 1)(2)(8)(9)) //8