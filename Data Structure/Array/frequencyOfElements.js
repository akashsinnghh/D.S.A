let array =[10, 20, 20, 10, 10, 20, 5, 20]

function frequencyOfElements(arr){
    return arr.reduce((acc,curr)=>{
        if(acc[curr]){
            acc[curr] = ++acc[curr]
        }else{
            acc[curr] = 1
        }
        return acc
    },{})
}

console.log(frequencyOfElements(array))

