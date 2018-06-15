// Naive approach:
// time complexity: O(n)
// space complexity: O(n)

function isPalindrome(original) {
  let reversedStrArr = [];

  for (let i = original.length - 1; i >= 0; i--) {
    reversedStrArr.push(original[i]);
  }

  let reversed = reversedStrArr.join("");
  console.log(reversed);

  return reversed === original;
}

console.log(isPalindrome("ackkhca"));
console.log(isPalindrome("anutforajaroftuna"));
console.log(isPalindrome("amoreroma"));

//=============================================================//

// Most optimal solution:
// time complexity: O(n/2)
// space complexity: O(1)
function isPalindrome(originalString) {
  let leftPointer = 0;
  let rightPointer = originalString.length - 1;

  while (leftPointer < rightPointer) {
    if (originalString[leftPointer] !== originalString[rightPointer]) {
      return false;
    }
    leftPointer++;
    rightPointer--;
  }

  return true;
}