//计算数组中，最大连续增长子序列的长度，如：[1,2,3,4,1,2,3,4,5,1,2,3] 结果为5。
var arr = [1, 2, 3, 4, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 6, 7];

function getMaxLength(arr) {
	//...
	var addNum = 0;
	var len = 0;

	/*
		arr[-1]	 
		1>undefined 结果 为false
		1>undefined -> 1>NaN -> NaN -> false
		将undefined转化为数字，NaN,再与1比较，结果为NaN，再将NaN转化为false	  
	 */

	// console.log(arr[-1]);	//undefined
	for (var i = 0; i < arr.length; i++) {
		if (arr[i + 1] > arr[i]) {
			//这个条件成立说明现在还是一个序列
			addNum++;
			len = addNum > len ? addNum : len;
		} else {

			//走到这里说明已经 不是一个序列
			addNum = 1;
		}
	}

	return len;
}
console.log(getMaxLength(arr));