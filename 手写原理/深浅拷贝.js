// 浅拷贝
function copy(origin, target) {
    let target = target || {}
    for (let el in origin) {
        target[el] = origin[el];
    }
    return target;
}


//深拷贝
function deepCopy(origin) {
    // 1.定义一个变量，用于存新值
    let target = null;
    if (typeof origin !== 'object') {
        // 2.非对象直接复制
        target = origin;
    } else {
        //3.为目标附一个空对象或者数组
        target = Array.isArray(origin) ? [] : {};
        //3.遍历对象或者数组
        for (let i in origin) {
            if (origin.hasOwnProperty(i)) {
                //递归拷贝 
                target[i] = deepCopy(origin[i])
            }
        }
    }
    // 5.最终返回结果  普通值返回普通值  对象/数组返回对象和数组
    return target;

}

let a = deepCopy({
    a: 1,
    b: [1, {
        a: 1
    }]
})

console.log(a);