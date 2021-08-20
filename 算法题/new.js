function newObj(Func, ...args) {
    const obj = Object.create(Func.prototype); //创建一个空对象继承
    const result = Func.call(obj, ...args);
    return typeof result === "object" ? result : obj;
}

Function.prototype.Mycall = function (obj, ...args) {
    obj.a = this; //通过调用的方式改变this指向
    const result = obj.a(...args);
    delete obj.a;
    return result;
}

Function.prototype.Mybind = function (obj, ...args) {
    return () => {
        this.call(obj, ...args)
    }
}


console.log({}.__proto__);
const obj = Object.create(1)

function create(obj) {
    if (typeof obj !== "object") {
        throw new Error(" Object prototype may only be an Object or null:" + obj)
    } else {
        const result = {}
        result.__proto__ = obj;
        return result;
    }
}
console.log(obj.__proto__);