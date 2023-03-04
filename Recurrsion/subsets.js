function subsets (arr,i,path){
    if(i == arr.length){
        if(path?.length>0){
            console.log(path)
        }
    } else {
        path.push(arr[i])
        subsets(arr, i + 1 , path)    // recurrsive function call
        path.pop()
        subsets(arr, i + 1 , path)    // recurrsive function call 
    }
}
let arr = [3,1,2]
let path = new Array();
subsets(arr,0,path)
