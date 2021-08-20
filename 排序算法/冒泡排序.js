/* <!-- 排序的本质就是比较和交换 --> */
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
/**
 * 相邻的比较 然后大的放后移
 * 时间复杂度 n^2
 * @param {} arr 
 */
function bullerSort(arr) { //冒泡排序
	//执行多少arr.length-1次每次将最大往后放
	for (var i = 0; i < arr.length - 1; i++) {
		//互相比较交换，比较arr。length-1-i次
		for (var j = 0; j < arr.length - 1 - i; j++) {
			if (compare(arr[j], arr[j + 1])) {
				swap(arr, j, j + 1)
			}
		}
	}
}
var a = [2, 9, 5, 7, 10, 3, 6];
bullerSort(a);