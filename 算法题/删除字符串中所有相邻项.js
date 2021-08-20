let str = 'abbaca';
let arr = [];
for (let i in str) {
	let current = str[i];
	console.log(current)
	if (arr.length != 0 && arr[arr.length - 1] === current) {
		arr.pop(); //返回值
	} else {
		arr.push(current); //返回索引
	}
}
console.log(arr.join(','));