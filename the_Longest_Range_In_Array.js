function findMaxRange(arr) {

    let longestRange = [];
    let longestVal = 0;
    let hashMap = {};
  
    // initialize:
    for (let i = 0; i < arr.length; i++) {
      let num = arr[i];
      hashMap[num] = true;
    }
  
    for (let i = 0; i < arr.length; i++) {
      let num = arr[i];
      if (hashMap[num] === false) {
        continue;
      }
  
      hashMap[num] = false;
      let left = num - 1;
      let right = num + 1;
      let tempLongestVal = 0;
  
      while (left in hashMap ) {
        hashMap[left] = false;
        tempLongestVal += 1;
        left--;
      }
  
      while (right in hashMap) {
        hashMap[right] = false;
        tempLongestVal += 1;
        right++;
      }
  
      if (tempLongestVal > longestVal) {
        longestVal = tempLongestVal;
        longestRange = [left + 1, right - 1];
      }
  
    }
  
    return longestRange;
  }
  
  
  let arr1 = [7, 12, 19, 30, 40, 39, 5, 22, 3, 31, 37, 0, 32, 1, 33, 4, 34, 6, 35, 8, 36, 2, 38];
  let arr2 = [7, 12, 19, 30, 40, 39, 5, 22, 3, 37, 0, 32, 1, 33, 4, 34, 6, 8, 36, 2, 38, 9, 27, 10];
  
  console.log(findMaxRange(arr1)); // [30, 40]
  console.log(findMaxRange(arr2)); // [0, 10]