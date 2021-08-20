function convert(str) {
    if (str.length <= 3)
        return str;
    let arr = str.split("");
    arr.reverse();
    let arr1 = []
    for (let i = 0; i < arr.length; i = i + 3) {
        arr1 = arr1.concat(arr.slice(i, i + 3).concat(","));
    }
    arr1.reverse();
    arr1.shift()
    return arr1.join("");
}
console.log(convert("12345678"))