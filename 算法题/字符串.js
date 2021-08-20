var str = 'abcacd';
var str1 = 'ca';
// 方法一
console.log(str.indexOf(str1));
// 方法二
function subStr1(str, str1) {
	var start = 0;
	for (var i = 0; i < str.length; i++) {
		for (var j = 0; j < str1.length; j++) {
			if (str1[j] != str[j + i])
				break;
			if (j == str1.length - 1)
				return i;
		}
	}
	return -1;
}
// 方法三
function subStr(str, str1) {
	var start = 0;
	while (start <= str.length - str1.length) {
		if (str.slice(start, str1.length + start) === str1) {
			return start;
		}
		start++;
	}
	return -1;
}
console.log(subStr(str, str1));
console.log(subStr1(str, str1));