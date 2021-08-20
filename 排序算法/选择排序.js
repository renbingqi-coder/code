
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
//选择排序
/**
 * 每次找到最大的值的位置然后将它放到最后 第二大放在倒数第二 以此类推
 * 时间复杂度 n^2
 * @param {*} arr 
 * @returns 
 */
function selectSort(arr) {
	if (arr == null || arr.length == 0)
		return;
	for (var i = 0; i < arr.length - 1; i++) {
		var maxindex = 0;
		for (var j = 0; j < arr.length - 1 - i; j++) {
			if (arr[j+1]>arr[maxindex]) {
				maxindex = j+1;
			}
		}
		[arr[maxindex],arr[arr.length - 1-i]]=[arr[arr.length - 1-i],arr[maxindex]]
	}
}
var a = [2, 9, 5, 7, 10, 3, 6];
selectSort(a)
console.log(a)

