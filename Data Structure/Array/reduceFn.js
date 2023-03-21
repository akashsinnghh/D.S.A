//                              Here we will be learning reduce function 

let arr = [1,5,4,8,6,2]
function findSum(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {    // this is the normal way to find the sum of array elements
        sum+=arr[i]
    }
    return sum
}
// console.log(findSum(arr))

//                                           With reduce function

function reducer(arr){
    arr.reduce((acc,curr)=>{
        acc+=curr
        return acc
    },0)
}


console.log(reducer(arr))