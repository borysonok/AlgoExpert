
// O(n^2)-time | O(n)-space;
//
function threeNumberSum(array, targetSum) {
    array.sort((a, b) => a - b);
    let triplets = [];
    for (let i = 0; i < array.length - 2; i++) {
        let left = i + 1;
        let right = array.length - 1;
        while (left < right) {
            let curSum = array[i] + array[left] + array[right];
            if (curSum === targetSum) {
                triplets.push([array[i], array[left], array[right]]); //.sort((a,b) => a-b));
                left++;
                right--;
            } else if (curSum < targetSum) {
                left++;
            } else { // if (curSum > targetSum){
                right--;
            }
        } //end while
    } //end for
    return triplets;
}