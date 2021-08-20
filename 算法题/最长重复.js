function text(s) {
	let result = {};
	s = s.split("");
	for (let i = s.length - 1; i >= 0; i--) {
		result[s[i]] = result[s[i]] ? (result[s[i]] + 1) : 1;
	}
	let max = 0;
	result = Object.values(result);
	for (let j = result.length - 1; j >= 0; j--) {
		if (result[j] > max)
			max = result[j];
	}
	return max;
};
text('abcbbb');