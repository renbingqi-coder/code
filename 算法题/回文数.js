//判断数组是否为对称数组，对称数组形式如：[a, b, c, b, a]、[a, b, c, c, b, a]
var arr2 = ['a', 'b', 'c', 'c', 'b', 'a'];
var arr3 = "abccba"
//方法一：用一个数组存反的数据，然后直接比较
function symmetry(arr) {
	//....
	var newArr = []; //存反取的数据
	for (var i = arr.length - 1; i >= 0; i--) {
		newArr.push(arr[i]);
	}
	// 原数组与反数据对比
	for (var i = 0; i < newArr.length; i++) {
		if (newArr[i] != arr[i]) {
			return false;
			// 如果不一样返回false
		}
	}
	return true;
}
//用一个变量存数组尾部，一个存开头,遍历数组
function symmetry(arr) {
	var start = 0;
	var end = arr.length - 1;
	for (var i = 0; i < arr.length; i++) {
		// 判断对称位置上是否相等
		if (arr[start] != arr[end]) {
			return false;
		}
		start++; //开始+1
		end--; //结尾-1
	}

	return true;
}
// 直接遍历
function symmetry(arr) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[1] != arr[arr.length - 1 - i]) {
			return false;
		}
	}
	return true;
}
// 前三个类似,算法时间复杂度高

//只需遍历数组一半
function symmetry(arr) {
	var start = 0;
	var end = arr.length - 1;
	for (var i = 0; i < arr.length; i++) {
		// 如果开始大于或者等于结尾直接结束循环，时间复杂度减半
		if (start >= end) {
			break;
		}
		if (arr[start] != arr[end]) {
			return false;
		}
		start++;
		end--;
	}

	return true;
}
//与上面类似
function symmetry(arr) {
	var start = 0;
	var end = arr.length - 1;
	while (start < end) {
		if (arr[start] != arr[end]) {
			return false;
		}
		start++;
		end--;
	}
	return true;
}
console.log(symmetry(arr2), symmetry(arr3.split('').join(''))); //true true