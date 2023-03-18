// Given a list (Arr) of N integers, print all the sums of all subsets in it. Output should be printed in increasing order of sums.
// Input:
// let N = 3
// let Arr = [3,1,2]
// Output: 
// [0, 1, 2, 3, 3, 4, 5, 6]

// write code in js and use recurrsion

function printAllSubsets(arr, n, sum = 0, index = 0, output = []) {
  // Push the current sum to the output array
  output.push(sum);

  // Recursively call the function for all remaining elements in the array
  for (let i = index; i < n; i++) {
    // Include the current element in the sum
    sum += arr[i];

    // Recursively call the function for the remaining subset
    printAllSubsets(arr, n, sum, i + 1, output);

    // Exclude the current element from the sum
    sum -= arr[i];
  }

  // Return the output array
  return output;
}

// Example usage
const arr = [3,1,2];
const n = arr.length;
const output = printAllSubsets(arr, n);
console.log(output.sort());
