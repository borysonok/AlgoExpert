// Find all triplets in an array that are equal to the target sum.
// Time: O(n^2)
// Space O(n)

function threeNumberSum(array, targetSum) {
    array.sort((a, b) => a - b);
    const triplets = [];
  
    for (let i = 0; i < array.length - 2; i++) {
      let left = i + 1;
      let right = array.length - 1;
      let currentSum = 0;
  
      while (left < right) {
        currentSum = array[i] + array[left] + array[right];
  
        if (currentSum === targetSum) {
          triplets.push([array[i], array[left], array[right]]);
          left++;
          right--;
        } else if (currentSum < targetSum) {
          left++;
        } else if (currentSum > targetSum) {
          right--;
        }
      }
    }
  
    return triplets;
  }
  
  const testArr = [12, 3, 1, 2, -6, 5, 0, -8, -1];
  console.log(threeNumberSum(testArr, 0));
  // [-8 3 5] [-6 1 5] [-1 0 1]