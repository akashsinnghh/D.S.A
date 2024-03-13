function findLargest(arr, index, max) {
    if (index === arr.length) {
        return max;
    }
    if (arr[index] > max) {
        max = arr[index];
    }
    return findLargest(arr, index + 1, max);
}
let arr=[6,4,9,5,1,3,10]
let largest = findLargest(arr, 0, arr[0]);
console.log(largest)
