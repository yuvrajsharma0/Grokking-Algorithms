let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(binarySearch(arr, 3));
console.log(binarySearch(arr, 9));
console.log(binarySearch(arr, 5));

function binarySearch(arr, el) {
	let low = 0;
	let high = arr.length - 1;

	while (low <= high) {
		let mid = Math.floor((low + high) / 2);
		let guess = arr[mid];

		if (guess == el) {
			return mid;
		} else if (guess < el) {
			low = mid + 1;
		} else {
			high = mid - 1;
		}

		// console.log(`Mid: ${mid}, Mid Element: ${guess}`);
	}

	return -1;
}
