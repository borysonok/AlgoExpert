// Selection Sort:
// Time O(n^2)
// Space O(1)

function selectSort(array) {
    let currentIdx = 0;
  
    while (currentIdx < array.length - 1) {
      let smallestIdx = currentIdx;
  
      for (let i = currentIdx + 1; i < array.length; i++) {
        if (array[smallestIdx] > array[i]) {
          smallestIdx = i;
        }
      }
  
      swap(currentIdx, smallestIdx, array);
      currentIdx++;
    }
  
    return array;
  }
  
  function swap(i, j, array) {
    [array[i], array[j]] = [array[j], array[i]];
  }
  
  const arr = [3, -2, -11, 0, 5, 23, 67, -17, 0, 9, 32, 1, 7, 19, -2]
  console.log(arr);
  //swap(0, 1, arr);
  //console.log(arr);
  
  console.log(selectSort(arr));
  