function deepCopy(origin) {
    let result = null;
    if (typeof origin !== "object") {
        result = origin;
    } else {
        result = Array.isArray(origin) ? [] : {};
        for (let i in origin) {
            result[i] = deepCopy(origin[i]);
        }
    }
    return result;
}
const obj = {
    a: 1,
    b: 2
}
const obj1 = deepCopy(obj)
console.log();
console.log(obj.a = 2, obj, obj1);

Array.prototype._falt = function (index) {
    return this.reduce((pre, cur) => {
        return index !== 0 ?
            Array.isArray(cur) ? [...pre, ...cur._falt(--index)] : [...pre, cur] : [...pre, cur];
    }, [])
}

console.log([1, 2, 3, [2, 3, 4, [2, 5]]]._falt(1));
console.log([1, 2, 3, [2, 3, 4, [2, 5]]].flat(2));


function print(arr1) {
    let num = 0, //层数
        len = arr1.length; //长度
    const arr = [];
    while (len - num > num) {
        let left = num,
            right = len - num - 1,
            top = num,
            bottom = len - num - 1;
        //left-->right
        while (left < len - num - 1) {
            arr.push(arr1[top][left])
            left++;
        }
        console.log(left);
        //top-->bottom
        while (top < len - num - 1) {
            arr.push(arr1[top][right])
            top++;
        }
        console.log(top);
        //right --> left
        while (right >= num) {
            arr.push(arr1[top][right])
            right--;
        }
        //bottom --> top
        while (bottom >= num) {
            arr.push(arr1[bottom][right])
            bottom--;
        }
        num++;
    }
    return arr;
}

console.log(print([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]));