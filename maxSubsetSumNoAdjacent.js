// Find Maximum Subset Sum with no Adjacent elements
// V.1;
// Time O(n);
// Space: O(n);
//
function maxSubsetSumNoAdjacent(array) {
  if (!array.length) {
    return 0;
  }
  if (array.length === 1) {
    return array[0];
  }

  const maxSums = array.slice();
  maxSums[1] = Math.max(array[0], array[1]);
  for (let i = 2; i < array.length; i++) {
    maxSums[i] = Math.max(maxSums[i - 1], maxSums[i - 2] + array[i]);
  }

  return maxSums[maxSums.length - 1];
}

const arr_1 = [4, 3, 5, 200, 5, 3];
const arr_2 = [10, 5, 20, 25, 15, 5, 5, 15];
console.log("first: ", maxSubsetSumNoAdjacent(arr_1)); // 207
console.log("second: ", maxSubsetSumNoAdjacent(arr_2)); // 60

//================================================================================//
// V.2;
// Time O(n);
// Space: O(1);
//
function maxSubsetSumNoAdjacent(array) {
  if (!array.length) {
    return 0;
  }
  if (array.length === 1) {
    return array[0];
  }
  let first = Math.max(array[0], array[1]);
  let second = array[0];

  for (let i = 2; i < array.length; i++) {
    current = Math.max(first, second + array[i]);
    second = first;
    first = current;
  }

  return first;
}
