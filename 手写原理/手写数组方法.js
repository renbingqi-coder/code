//封装一个forEach
Array.prototype.myForEach = function (fun) {
    for (var i in this) {
        if (this.hasOwnProperty(i)) {
            fun(this[i], i, this);
        }
    }
}

// 封装一个filter
Array.prototype.myFilter = function (fun) {
    var arr = []; //定义一个新的数组
    for (var i in this) {
        //如果为真,留下
        if (this.hasOwnProperty(i))
            fun(this[i], i, this) ? arr.push(this[i]) : null;
    }
    return arr;//重新返回一个数组
}


// 封装一个Map  映射 x->y
Array.prototype.myMap = function (fun) {
    var arr = [];
    for (var i in this) {
        if (this.hasOwnProperty(i))
            arr.push(fun(this[i], i, this));  //返回一个新数组
    }
    return arr;
}

// 封装Every
Array.prototype.myEvery = function (fun) {
    var a = null;
    for (var i in this) {
        if (this.hasOwnProperty(i))
            a = fun(this[i], i, this);
        if (!a)
            break;
    }
    return a;
}

// 封装some
Array.prototype.mySome = function (fun) {
    var a = null;
    for (var i in this) {
        if (this.hasOwnProperty(i))
            a = fun(this[i], i, this);
        if (a)
            break;
    }
    return a;
}

// 封装reduce
Array.prototype.myReduce = function (fun, obj) {
    var prep = obj;
    for (var i in this) {
        if (this.hasOwnProperty(i)) {
            prep = fun(prep, this[i], i, this)
        }
    }
    return prep;
}