// let const 区别
// var没有块级作用
// • 允许重复的变量声明：导致数据被覆盖
// • 变量提升：怪异的数据访问、闭包问题
// • 全局变量挂载到全局对象（window）：全局对象成员污染问题
{
    var a = 1;

}
console.log(a); //输出1
//promiseall的输出结果 顺序

function all(proms) {
    return new Promise((resolve, reject) => {
        const results = proms.map(p => {
            const obj = {
                result: undefined,
                isResolved: false
            }
            p.then(data => {
                obj.result = data;
                obj.isResolved = true;
                //判断是否所有的全部完成
                const unResolved = results.filter(r => !r.isResolved)
                if (unResolved.length === 0) {
                    //全部完成
                    resolve(results.map(r => r.result));
                }
            }, reason => {
                reject(reason);
            })
            return obj;
        })
    })
}
//解构
//为什么会有类
//数据响应式
//虚拟dom的优缺点