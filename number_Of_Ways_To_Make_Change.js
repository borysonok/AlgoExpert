function numberOfWaysToMakeChange(n, denoms) {
	
	// Old School way to initialize an array:
	// let numOfWays = [];
	// numOfWays[0] = 1;
	// for(let amount = 1; amount <= n; amount++){
	// 	numOfWays[amount] = 0;
	// }
	
	const numOfWays = (new Array(n+1)).fill(0);
	numOfWays[0] = 1;
	
  // Time complexity: O(n*k);
  // k - number of coins
  // n - total amount of change;

  for(let coinIdx = 0; coinIdx < denoms.length; coinIdx++) {
		for(let amount = 0; amount < numOfWays.length; amount++) {
			if(denoms[coinIdx] <= amount){
				numOfWays[amount] += numOfWays[amount - denoms[coinIdx]];
			}
		}
	}
	return numOfWays[n];
}

console.log(numberOfWaysToMakeChange(4, [1,2,3]));
console.log(numberOfWaysToMakeChange(5, [1,2,3]));
console.log(numberOfWaysToMakeChange(6, [1,2,3]));