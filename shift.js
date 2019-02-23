var arr = [1, 4, 16, 8, 8, 2, 1];

for (var i = 0; i < arr.length; i++) {

	if (arr[i] === arr[i + 1]) {
		var sum = arr[i] + arr[i + 1];
		if ((i - 1 >= 0) && (sum === arr[i - 1])) {

		} else if ((i + 2 < arr.length) && (sum === arr[i + 2])) {
			
		}
	}
}