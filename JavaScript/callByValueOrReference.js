let a = 5 
let b = a

b = b + 5
console.log(a)  //5                 // Call by value
console.log(b)  //10

let obj1 = {
    name : "Akash",
    no : 62
}

obj2 = obj1

obj2.no = 45
console.log(obj1)  //45                 // call by reference
console.log(obj2)  //45

//why 
// because in 1st function it is taking only the value but
// in 2nd function it is not copying the values it is taking the address
// of the `obj` and placing it in the `obj2`.