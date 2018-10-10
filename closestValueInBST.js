

// Find closest value in a BST:

// 1) Recursive solution:
// Time O(log(n))
// Space O(log(n))

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
    }

    if (target > tree.value) {
        return findClosestHelperFunc(tree.right, target, closest);
    }

    if (target === tree.value) {
        return closest;
    }

}