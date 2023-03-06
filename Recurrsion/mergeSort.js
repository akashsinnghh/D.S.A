function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr; // base case: array is already sorted
  }

  // divide the array into two halves
  const middle = Math.floor(arr.length / 2);
  const left = [];
  const right = [];
  for (let i = 0; i < middle; i++) {
    left.push(arr[i]);
  }
  for (let i = middle; i < arr.length; i++) {
    right.push(arr[i]);
  }

  // recursively sort each half
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  // merge the two sorted halves
  const result = [];
  let i = 0; // index for sortedLeft
  let j = 0; // index for sortedRight
  while (i < sortedLeft.length && j < sortedRight.length) {
    if (sortedLeft[i] <= sortedRight[j]) {
      result.push(sortedLeft[i]);
      i++;
    } else {
      result.push(sortedRight[j]);
      j++;
    }
  }
  // concatenate any remaining elements from both arrays
  while (i < sortedLeft.length) {
    result.push(sortedLeft[i]);
    i++;
  }
  while (j < sortedRight.length) {
    result.push(sortedRight[j]);
    j++;
  }

  return result;
}

// example usage
const arr = [6, 5, 3, 1, 8, 7, 2, 4];
const sortedArr = mergeSort(arr);
console.log(sortedArr); // output: [1, 2, 3, 4, 5, 6, 7, 8]
