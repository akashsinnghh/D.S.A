//Merge two sorted arrays 

let arr1 = [1, 3, 4, 5]
let arr2 = [2, 4, 6, 8]

function merge(arr1,arr2){
    let arr3=[]
    let i = 0,j = 0,k = 0
    while(i<arr1.length){
        arr3[k++] = arr1[i++]
    }
    while(j<arr2.length){
        arr3[k++] = arr2[j++]
    }
    arr3.sort()
    return arr3
}

console.log(merge(arr1,arr2))



