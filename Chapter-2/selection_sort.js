function main() {
	let arr = [1, 33, 22, 66, 3, 103, -1, 53, 15, 19];

	console.log(selectionSort(arr));
}

main();

function selectionSort(arr) {
	let sortedArr = [];
	let arrLength = arr.length;

	for (let i = 0; i < arrLength; i++) {
		let sm = findSmallest(arr);

		sortedArr.push(arr[sm]);
		arr.splice(sm, 1);
	}

	return sortedArr;
}

function findSmallest(arr) {
	let sm;

	for (let i = 0; i < arr.length; i++) {
		if (i == 0) {
			sm = i;
		}

		if (arr[sm] > arr[i]) {
			sm = i;
		}
	}

	return sm;
}
