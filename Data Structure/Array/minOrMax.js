let array = [1, 20, 32, 10, 12, 20, 5, 20]

function min(arr){
    return arr.reduce((max,curr)=>{
        if(max>curr){
            max = curr
        }
        return max
    },10000)
}
console.log(min(array))

function forMax(arr){
    let max = 0
    for(let i= 0;i<arr.length;i++){
        if(arr[i]>max){
            max = arr[i]
        }
    }
    return max
}
console.log(forMax(array))