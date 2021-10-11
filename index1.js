function quickSort(arr){
    if(arr.length===0)
        return [];
    let temp = arr.shift();
    let arrLeft = [];
    let arrRight = [];
    for(let i of arr){
        if(i<=temp){
            arrLeft.push(i)
        }else{
            arrRight.push(i)
        }
    }
    const resultLeft = quickSort(arrLeft)
    const resultRight = quickSort(arrRight);
    return [...resultLeft,temp,...resultRight];
}

console.log(quickSort([2,4,1,5,3]));