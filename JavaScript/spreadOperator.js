function sum(a,b,c){            // rest Parameter " ... "
    let total =0
    total= a+b+c
    console.log(total)
}

let arr = [1,2,3]
sum(...arr)

//                               Or it can be used to concat()

let arr1 = [1,2,3]
let arr2 = [4,5,6]

let arr3 = [...arr1,...arr2]
console.log(arr3)