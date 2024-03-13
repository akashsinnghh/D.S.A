function maximumValue(arr){
    let temp=0
    let secLargest=0
    arr.forEach((val)=>{
        if(temp<val){
            temp=val
        }
    })
    arr.forEach((val,i)=>{
        if(val < temp && val > secLargest){
            secLargest = val
        }
    })
    console.log("largest",secLargest,)
     return temp
}
let arr=[6,4,9,5,1,3,10]
console.log(maximumValue(arr))
