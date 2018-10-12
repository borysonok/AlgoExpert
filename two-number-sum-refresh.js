// 1)
// First brute-forse solution: O(n^2)-time | O(1)-space
//
function twoNumberSum(array, targetSum) {
	for(let i=0; i<array.length-1; i++){
		for(let j=i+1; j<array.length; j++){
			if(array[i] + array[j] === targetSum){
				return [array[i], array[j]].sort((a,b)=>a-b);
			}
		}
	}
  return[];
}

// 2)
// Using the hashing: O(n)-time | O(n)-space.
//
let num_Ys = {};
	for(let i = 0; i < array.length; i++){
		let x = array[i];
		let y = targetSum - x;
		if(num_Ys[y] !== undefined){
			return [x, y].sort((a,b) => a-b);
		} else {
			num_Ys[x] = x;
		}
	}
	return[];