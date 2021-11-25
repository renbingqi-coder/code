function MyPromiseAll(arr) {
    return new Promise((resolve, reject) => {
        let result = [];
        arr.forEach((el) => {
            el.then((val) => {
                result.push(val)
                if (result.length === arr.length) {
                    resolve(result)
                }
            }, (result) => {
                reject(result)
            })
        })
    })
}
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


all([new Promise((r, j) => {
    console.log(1);
    setTimeout(()=>{
        r(1)
    })
}), new Promise((r, j) => {
    console.log(2);
    r(2)
})]).then(data => {
    console.log(data);
}, (result) => {
    console.log(result)
})