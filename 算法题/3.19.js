function text(arr) {
	let sign = null;
	for (let i = arr.length - 1; i > 0; i--) {
		if (arr[i - 1] < arr[i]) {
			sign = i - 1;
			break;
		}
	}
	if (sign == null)
		return arr.reverse();
	for (let i = arr.length - 1; i > sign; i--) {
		if (arr[i] > arr[sign]) {
			let temp = arr[i];
			arr[i] = arr[sign];
			arr[sign] = temp;
			break;
		}
	}
	arr.splice(sign + 1, arr.length - sign + 1, ...arr.slice(sign + 1).reverse());
	return arr;
}