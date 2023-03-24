function sum(a,b,c){            // rest Parameter " ... "
    let total =0
    total= a+b+c
    console.log(total)
}

let arr = [1,2,3]
// sum(...arr)

//                               Or it can be used to concat()

let arr1 = [1,2,3]
let arr2 = [4,5,6]

let arr3 = [...arr1,...arr2]
// console.log(arr3)

//                               Or it can be used to solve the problem of Call By Reference. How ?

let arr4 = [1,2,3]
let arr5 = arr4
// arr5.push(7,8)
console.log(arr4) //output : [ 1, 2, 3, 7, 8 ]
console.log(arr5) ////output : [ 1, 2, 3, 7, 8 ]

// To get rid of this we can use spread operator

let arr6 = [...arr4,7,8]
console.log(arr6)
