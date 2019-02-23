var arr = [1, 2, 4, 4, 8];
var steps = [];

shift();

function shift() {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === arr[i + 1]) {
			var sum = arr[i] + arr[i + 1];
			if ((i - 1 >= 0) && (sum === arr[i - 1])) {
				//left shift
				arr[i] = sum;
				arr.splice(i + 1, 1);
				steps.push('left');
			} else if ((i + 2 < arr.length) && (sum === arr[i + 2])) {
				//right shift
				arr[i + 1] = sum;
				arr.splice(i, 1);
				steps.push('right');
			} else {
				//left shift
				arr[i] = sum;
				arr.splice(i + 1, 1);
				steps.push('left');
			}
			return shift();
		}
	}	
}

console.log(arr)
console.log(steps)