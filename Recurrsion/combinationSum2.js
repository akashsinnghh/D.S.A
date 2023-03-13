//                                      Combination Sum Secand


// Suppose we have an array = [1,1,1,2,2], so we have to print all the combitnations of 4 
// in this no index should be repeated and each array should be in a sorted manner.
// so final output will be [[1,1,2],[2,2]]

function combinationSum2(candidates, target) {
  candidates.sort((a, b) => a - b);
  const result = [];

  function backtrack(start, currentSum, currentList) {
    if (currentSum === target) {
      result.push(currentList.slice());
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      if (i > start && candidates[i] === candidates[i - 1]) continue; // Skip duplicates
      if (currentSum + candidates[i] > target) break; // Prune branch

      currentList.push(candidates[i]);
      backtrack(i + 1, currentSum + candidates[i], currentList);
      currentList.pop();
    }
  }

  backtrack(0, 0, []);
  return result;
}

const candidates = [10,1,2,7,6,1,5];
const target = 8;
console.log(combinationSum2(candidates, target));


// 1 - First, we sort the candidates array in ascending order so that we can easily skip duplicates later on.

// 2 - Then, we define a result array to store the valid combinations.

// 3 - Next, we define the backtrack function which takes three parameters: start, currentSum, and currentList. 
//     start represents the starting index of the candidates array for the current recursion level, currentSum represents the current sum of
//     the elements in currentList, and currentList represents the current list of elements we've selected so far.

// 4 - Inside the backtrack function, we first check if currentSum is equal to target. If it is, then we've found a valid combination 
//     and we push a copy of currentList to the result array.

// 5 - Next, we loop through the candidates array starting from index start. We use a check to skip over duplicates in the array. 
//     If the sum of the current element and currentSum is greater than target, then we know we won't find a valid combination down
//     this branch of the recursion tree, so we break out of the loop. Otherwise, we add the current element to currentList, 
//     and recursively call backtrack with the updated parameters.

// 6 - Finally, we call backtrack with initial values of start set to 0, currentSum set to 0, and an empty currentList. We then return the result array.

// 7 - We test the function by calling it with the given candidates array and target, and log the result to the console.

