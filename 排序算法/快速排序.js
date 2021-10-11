//比较方式
function compare(a, b) {
	if (a > b) //正序 a < b逆序
		return true;
	else
		return false;
}
//交换
function swap(arr, a, b) {
	var temp = arr[a];
	arr[a] = arr[b];
	arr[b] = temp;
}

function quickSort(arr) {
	if (arr.length == 1 || arr.length == 0)
		return arr;
	// 选一个中间数
	var leader = arr[0];
	//小的站左边，大的站右边
	var left = [];
	var right = [];
	for (var i = 1; i < arr.length; i++) {
		if (compare(arr[i], leader))
			right.push(arr[i]);
		else
			left.push(arr[i]);
	}
	left = quickSort(left);
	right = quickSort(right);
	left.push(leader);
	return left.concat(right);
}
var a = [2, 9, 5, 7, 10, 3, 6];
quickSort(a);


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
