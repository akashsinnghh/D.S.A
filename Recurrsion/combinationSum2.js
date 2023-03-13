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



                                        // Using Sets


// function combinationSum2(candidates, target) {
//   const result = [];
//   candidates.sort((a, b) => a - b); // sort candidates array in ascending order
//   backtrack(0, target, new Set()); // start the recursion with empty selected set
//   return result;

//   function backtrack(start, target, selected) {
//     if (target === 0) {
//       result.push([...selected]); // found a valid combination, add a copy to the result array
//       return;
//     }
//     if (target < 0) {
//       return; // sum exceeds the target, backtrack
//     }

//     for (let i = start; i < candidates.length; i++) {
//       if (i > start && candidates[i] === candidates[i - 1]) continue; // skip duplicates
//       selected.add(candidates[i]); // include the current candidate in the selected set
//       backtrack(i + 1, target - candidates[i], selected); // recursively call with updated target and selected set
//       selected.delete(candidates[i]); // remove the current candidate from the selected set for backtracking
//     }
//   }
// }

// const candidates = [10, 1, 2, 7, 6, 1, 5];
// const target = 8;
// console.log(combinationSum2(candidates, target));

