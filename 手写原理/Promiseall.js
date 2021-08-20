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


MyPromiseAll([new Promise((r, j) => {
    r(1)
}), new Promise((r, j) => {
    j(2)
})]).then(data => {
    console.log(data);
}, (result) => {
    console.log(result)
})