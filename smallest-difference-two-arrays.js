// Find the pair of numbers with the smallest differens between two arrays:
// O(n*log(n) + m*log(m)) - time | O(1) - space;
//
function smallestDifference(arrayOne, arrayTwo) {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);
  let left = 0;
  let right = 0;
  let current = Infinity;
  let smallest = Infinity;
  let smallestAr = [];
  while (left < arrayOne.length && right < arrayTwo.length) {
    if (arrayOne[left] < arrayTwo[right]) {
      current = arrayTwo[right] - arrayOne[left];
      left++;
    } else if (arrayOne[left] > arrayTwo[right]) {
      current = arrayOne[left] - arrayTwo[right];
      right++;
    } else {
      return [arrayOne[left], arrayTwo[right]];
    }

    if (current < smallest) {
      smallest = current;
      smallestAr = [arrayOne[left], arrayTwo[right]];
    }
  }
  return smallestAr;
}
