// Now our problem is to write a function whose subsets sum's up to a given number. 
// let arr = [1,2,1] ------ subsets will be [ 1, 2, 1 ],[ 1, 2 ],[ 1, 1 ],[ 1 ],[ 2, 1 ],[ 2 ],[ 1 ]
// let sum = 2 ------ sum will be 2, hence subsets will be like this [ 1, 2, ] , [2]

function subsetsSum(i, path, s, sum, arr) {
    if (i === arr.length) {
        if(s === sum) {
            console.log("s",s,"path",path);
            return true
        } else
        return false;
    }
    path.push(arr[i]);
    s+=arr[i]
    // console.log("s",s)
    if ( subsetsSum(i+1, path, s, sum, arr, n) == true){
        return true;
    }
    s-=arr[i]
    path.pop();
    if(subsetsSum(i+1, path, s, sum, arr, n)) return true
    return false
}


// count of subsets when sum = k

function subsetSum(i, s, sum, arr) {
    if (i === arr.length) {
        // condition satisfied
        if(s === sum) return 1
        // condition not satisfied
        else return 0;
    }
    s += arr[i]
    let l = subsetSum(i+1, s, sum, arr)
    s -= arr[i]
    let r = subsetSum(i+1, s, sum, arr)
    return l+r
}


let arr = [1, 2, 1];
let sum = 2;
let n = arr.length
let path = new Array();
console.log(subsetSum(0, 0, sum, arr, n))
subsetsSum(0, path, 0, sum, arr, n);
