function sortVersions(versions) {
    // write code here
    return versions.sort((a, b) => {
        console.log(a, b);
        console.log(compare(b, a));
        return ture;
    })
}

function compare(v1, v2) {
    console.log(v1, v2);
    v1 = v1.split(".")
    v2 = v2.split(".")

    for (let i = 0; i < 3; i++) {
        console.log(v1[i], v2[i]);
        if (v1[i] < v2[i]) {
            return 1;
        } else if (v1[i] > v2[i]) {
            return -1;
        }
    }
    return 1;
}
// console.log(sortVersions([2, 1]));

console.log([2, 30, 16, 50].sort((a, b) => Math.random - 0.5));

// function getMaxLengthChar(str) {
//     let map = {}
//     for (let i of str) {
//         if (map[i]) {
//             map[i]++
//         } else {
//             map[i] = 1;
//         }
//     }
//     console.log(map);
//     let result = {
//         key: null,
//         value: 0
//     }
//     for (let i in map) {
//         if (map[i] > result.value) {
//             result.key = i;
//             result.value = map[i]
//         }
//     }
//     return [result.key, result.value]
// }
// console.log(getMaxLengthChar("abcabcabcbbcccccc"));

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function shuffle(arr) {
    return arr.sort((a, b) => {
        console.log(a, b);
        return a - b;
    })
}

console.log(shuffle(arr));

// sort 小于零升序
// sort 大于零降序

// 返回负数交换