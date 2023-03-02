
// Javascript code to print all possible
// subsequences for given array using
// recursion
// Recursive function to print all
// possible subsequences for given array
function printSubsequences(arr, index, path)
{
// Print the subsequence when reach
// the leaf of recursion tree
if (index == arr.length)
{
	if (path.length >= 0) console.log(`[${path}]`);
}
else
{
  path.push(arr[index]);

	printSubsequences(arr, index + 1, path);

	path.pop();

	printSubsequences(arr, index + 1, path);
  

}
return;
}
// Driver code
let arr = [1,2,3];
// Auxiliary space to store each path
let path = new Array();
printSubsequences(arr, 0, path);
// This code is contributed by gfgking
