// Given an array "nums" of distinct integers, return all the possible permutation. you can return the answer in any order
// input: let nums = [1,2,3]
// output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

function permute(nums) {
    let res = [];
  
    function backtrack(temp, remaining) {
      if (temp.length === nums.length) {
        res.push(temp.slice());
      } else {
        for (let i = 0; i < remaining.length; i++) {
          let newTemp = temp.slice();
          newTemp.push(remaining[i]);
          let newRemaining = [];
          for (let j = 0; j < remaining.length; j++) {
            if (j !== i) {
              newRemaining.push(remaining[j]);
            }
          }
          backtrack(newTemp, newRemaining);
        }
      }
    }
  
    backtrack([], nums);
  
    return res;
  }
  
  let nums = ["a", "b", "c"];
  console.log(permute(nums));
  
