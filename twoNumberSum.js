
// FirstSolution:
// Time: O(n^2)
// Space: O(1)
function twoNumberSum(array, targetSum) {
    for (let i = 0; i < array.length - 1; i++) {
        let firstNum = array[i];
        for (let j = i + 1; j < array.length; j++) {
            let secondNum = array[j];
            if (firstNum + secondNum === targetSum) {
                return [firstNum, secondNum].sort((a, b) => a - b)
            }
        }
    }
    return [];
}

// ========================================================
// SecondSolution:
// Time: O(n)
// Space: O(n) !!!!!!! - this is because we create an aditional hash map.
function twoNumberSum(array, targetNumber) {
    let numbers = {};
    for (let num of array) {
        let resultNumber = targetNumber - num;
        if (resultNumber in numbers) {
            return [num, resultNumber].sort((a, b) => a - b);
        } else {
            numbers[num] = true;
        }
    }
    return [];
}

// ========================================================
// ThirdSolution:
// Time: O(n * log(n)) - we sort the array first which gives us O(n*log(n)) at best. After that it is just O(n).
// Space: O(1)
function twoNumberSum(array, targetSum) {
    array.sort((a, b) => a - b);
    let left = 0;
    let right = array.length - 1;
    while (left < right) {
      const currentSum = array[left] + array[right];
      if (currentSum === targetSum) {
        return [array[left], array[right]].sort((a, b) => a - b);
      } else if (targetSum > currentSum) {
        left++;
      } else if (targetSum < currentSum) {
        right--;
      }
    }
    return [];
  }
  



arr_1 = [4, 6]
arr_2 = [4, 6, 1]
arr_3 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
arr_4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 15]

console.log(twoNumberSum(arr_1, 10)); //[4, 6]
console.log(twoNumberSum(arr_2, 5));  //[4, 1]
console.log(twoNumberSum(arr_3, 17));  //[8, 9]
console.log(twoNumberSum(arr_4, 18));  //[3, 15]