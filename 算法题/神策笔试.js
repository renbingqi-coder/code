function includes(s1, s2) {
    // write code here
    const s2r = s2.split("").reverse().join("");
    return s1.includes(s2) || s1.includes(s2r);

}

console.log(includes("arash", "aah"));

function getTimes(array, k) {
    // write code here
    let map = getMap(array);
    let arr = Object.keys(map).sort((a, b) => {
        return b - a;
    });
    console.log(arr);
    return map[arr[k - 1]];

}

function getMap(array) {
    let map = {};
    for (let i of array) {
        if (map[i]) {
            map[i]++;
        } else {
            map[i] = 1;
        }
    }
    return map;
}

console.log(getTimes([1, 2, 3, 4, 4, 4], 1));


//最长升序子序列
function lcs(arr) {
    // write code here
}
module.exports = {
    lcs: lcs
};