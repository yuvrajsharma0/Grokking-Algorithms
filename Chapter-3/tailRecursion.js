function tailRecursion(n, accumulator = 1) {
	if (n == 0) {
		return accumulator;
	}
	return tailRecursion(n - 1, n * accumulator);
}

console.log(tailRecursion(5));
console.log(tailRecursion(1));
console.log(tailRecursion(0));
