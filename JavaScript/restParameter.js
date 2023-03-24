function sum(...inputs){            // rest Parameter " ... "
    let total =0
    for(i of inputs){
        total +=i
    }
    console.log(total)
}

sum(2,3,65,54)

// what are we doing here is suppose we have 100 actual parameters and and dummy parameters

//Rest parametersyntax allows us to represent the indefinite number of arguments as an array.