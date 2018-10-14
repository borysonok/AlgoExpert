
// O(2^n)-time; O(n)-space
function getNthFib(n) {
	if (n === 2) {
		return 1;
	} else if (n === 1) {
		return 0;
	} else {
		return getNthFib(n - 1) + getNthFib(n - 2);
	}
}

// O(n)-time; O(n)-space
function getNthFib(n) {
	let solved = { 1: 0, 2: 1, 3: 1 };
	if (n in solved) {
		return solved[n];
	} else {
		solved[n] = getNthFib(n - 1) + getNthFib(n - 2);
		return solved[n];
	}
}