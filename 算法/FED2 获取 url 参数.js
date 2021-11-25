// 描述
// 获取 url 中的参数
// 1. 指定参数名称，返回该参数的值 或者 空字符串
// 2. 不指定参数名称，返回全部的参数对象 或者 {}
// 3. 如果存在多个同名参数，则返回数组
// 4. 不支持URLSearchParams方法
// 示例1
// 输入：
// http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe key
// 复制
// 输出：
// [1, 2, 3]
// 复制

function getUrlParam(sUrl, sKey) {
    const query = sUrl.split('?')[1].split('#')[0].split('&');
    const result = [];
    const obj = query.forEach(el=>{
        const key = el.split('=')[0];
        const value = el.split('=')[1];
        if(key===sKey)
            result.push(value);
    })
   return result.length > 1 ? result : result.length > 0?result[0]:null;
}
var a = getUrlParam('http://www.nowcoder.com?key=1&key=2&key=3&key=4&test=4#hehe', 'key');
console.log(a.key.join('')==='1234');


//通过