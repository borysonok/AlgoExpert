// Works only on a SORTED Array !!!
// O(log(n)) - time | O(1) - space;
// Non recursive solution...
//
function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (array[middle] === target) {
      return middle;
    } else if (target < array[middle]) {
      right = middle - 1;
    } else if (target > array[middle]) {
      left = middle + 1;
    }
  }

  return -1;
}
