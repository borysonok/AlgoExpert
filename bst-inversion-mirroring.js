// 1. Iterative solution:
// O(n) - time | O(n) - space;
function invertBinaryTree(tree) {
  const queue = [tree];
  while (queue.length > 0) {
    const current = queue.shift();
    if (current) {
      [current.left, current.right] = [current.right, current.left];
      queue.push(current.left);
      queue.push(current.right);
    }
  }
}

// 2. Recursive solution:
// O(n) - time | O(d) - space; d - tree height which is also - O(log(n));
function invertBinaryTree(tree) {
  if (tree) {
    [tree.left, tree.right] = [tree.right, tree.left];
    invertBinaryTree(tree.left);
    invertBinaryTree(tree.right);
  }
}
