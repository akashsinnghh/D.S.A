// Suppose we have an array = [2,3,6,7], so we have to print all the combitnations of 7 
// so we can do it by picking 0th index two times and secand nindex two times i.e 2+2+3 = 7
//                  or
// by picking last index i.e 7 
// so final output will be [[2,2,3],[7]]

//                                      Combination sum

function combinationSum(nums, target) {
    const res = [];
    backtrack(nums, target, [], 0, res);
    return res;
  }
  
  function backtrack(nums, target, curr, start, res) {
    if (target < 0) return;
    if (target === 0) {
      res.push(curr.slice());
      return;
    }
    for (let i = start; i < nums.length; i++) {
      curr.push(nums[i]);
      backtrack(nums, target - nums[i], curr, i, res);
      curr.pop();
    }
  }
  const nums = [2, 3, 6, 7];
  const target = 7;
  const combinations = combinationSum(nums, target);
  console.log(combinations); // [[2, 2, 3], [7]]
    
