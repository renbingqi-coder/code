function getMaxLength(arr) {
    let max = 0;
    let maxlen = 0;

    for (let i in arr) {
        if (arr[i] < arr[i + 1]) {
            max++;
            maxlen = Math.max(maxlen, max)
        } else {
            max = 1;
        }
    }

}