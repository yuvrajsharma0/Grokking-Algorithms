function main() {
	// countdown(5);

	console.log(factorial(5));
	console.log(factorial(0));
}

main();

function countdown(i) {
	console.log(i);

	if (i <= 1) {
		return;
	} else {
		countdown(i - 1);
	}
}

function factorial(n) {
	if (n <= 1) {
		return 1;
	}
	return n * factorial(n - 1);
}
