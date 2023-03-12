//reduce in js

let users = [
    {name:"Akash", age:25},
    {name:"Rajat", age:75},
    {name:"Sada", age:50},
    {name:"Mushkan", age:25}
    ]
    
const output = users.reduce(function(acc,curr){
    if(acc[curr.age]){
        console.log("acc",acc[curr.age],"+ one",++acc[curr.age])
       acc[curr.age] = ++ acc[curr.age]
    } else {
        acc[curr.age] = 1  
    }
    return acc
} ,{})

console.log(output)
