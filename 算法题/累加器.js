function sum(...arg) {
    if (arg.length) {
        return function (args) {
            return arg.reduce((pre, cur) => {
                return pre + cur
            }, 0)
        }
    } else {
        return 0;
    }
}

console.log(sum(1)(1));