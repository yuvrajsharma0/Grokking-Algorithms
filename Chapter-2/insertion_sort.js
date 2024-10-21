function main() {
	let arr = [1, 33, 22, 66, 3, 103, -1, 53, 15, 19];

	console.log(insertionSort(arr));
}

main();

/*
    Not completed
*/

function insertionSort(arr) {
	for (let i = 1; i < arr.length; i++) {
		let key = arr[i];
		let j = i - 1;

		while (j >= 0) {
			if (arr[j] > key) {
				arr[i] = arr[j];
				arr[j] = key;
			}

			j = j - 1;
		}
	}

	return arr;
}
