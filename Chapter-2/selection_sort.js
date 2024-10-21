function main() {
	let arr = [
		["Radiohead", 156],
		["Kishore Kumar", 141],
		["The Black Keys", 35],
		["Neutral Milk Hotel", 94],
		["Beck", 88],
		["The Strokes", 61],
		["Wilco", 111],
	];

	console.log(selectionSort(arr));
}

main();

function selectionSort(arr) {
	let sortedArr = [];
	let arrLength = arr.length;

	for (let i = 0; i < arrLength; i++) {
		let smallest = findSmallest(arr);

		sortedArr.push(arr[smallest]);
		arr.splice(smallest, 1);
	}

	return sortedArr;
}

function findSmallest(arr) {
	let smallest = arr[0][1];
	let smallestIndex = 0;

	for (let i = 1; i < arr.length; i++) {
		if (arr[i][1] < smallest) {
			smallest = arr[i][1];
			smallestIndex = i;
		}
	}

	return smallestIndex;
}
