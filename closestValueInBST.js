// Find closest value in a BST:

// 1) Recursive solution:
// Average: Time O(log(n)) | Space O(log(n))
// Worst: Time O(n) | Space O(n)

function findClosestValueInBst(tree, target) {
	let closest = Infinity;
	return findClosestHelperFunc(tree, target, closest);
}

function findClosestHelperFunc(tree, target, closest) {
	if (!tree) {
		return closest;
	}
	if (Math.abs(tree.value - target) < Math.abs(closest - target)) {
		closest = tree.value;
	}
	if (target < tree.value) {
		return findClosestHelperFunc(tree.left, target, closest);
	} else if (target > tree.value) {
		return findClosestHelperFunc(tree.right, target, closest);
	} else { // if (target === tree.value)
		return closest;
	}
}

//==============================================================================================
// 2) Iterative solution:
// Average: Time O(log(n)) | Space O(1)
// Worst: Time O(n) | Space O(1)

function findClosestValueInBst(tree, target) {
	let currentNode = tree;
	let closest = Infinity;
	while (currentNode !== null) {
		if (Math.abs(currentNode.value - target) < Math.abs(closest - target)) {
			closest = currentNode.value;
		}
		if (target < currentNode.value) {
			currentNode = currentNode.left;
		} else if (target > currentNode.value) {
			currentNode = currentNode.right;
		} else {
			break;
		}
	}
	return closest;
}