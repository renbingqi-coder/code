function verify(param) {
    // write code here
    const str = param.replace(/[^\w\d]/g, "");
    const strArr = str.split("")
    if (strArr.reverse().join("").toLocaleLowerCase() === str.toLocaleLowerCase())
        return true;
    return false;
}
console.log(verify("A man, a plan, a canal: Panama"));
console.log((/[^\w\d]/g).test(":123"));

function ascSort(arr1, arr2, arr3) {
    let result = [];
    result.push(Math.max(...arr1));
    result.push(Math.max(...arr2));
    result.push(Math.max(...arr3));
    return result.sort((a, b) => {
        return b - a;
    })
}

console.log(ascSort([74, 16, 302, 9, 28, 0], [10, 99, 34, 33, 502, 6], [88, 2, 77, 648, 404, -1]));