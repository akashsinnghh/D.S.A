function merge(arr, low, mid, high) {
    let temp = []
    let left = low
    let right = mid + 1
    while (left <= mid && right <= high) {
        if (arr[left] <= arr[right]) {
            temp.push(arr[left])
            left++
        } else {
            temp.push(arr[right])
            right++
        }
    }

    while(left<=mid){
        temp.push(arr[left])
        left++
    }

    while(right<=high){
        temp.push(arr[right])
        right++
    }

    for(let i = low; i<=high; i++){
        arr[i]= temp[i-low]
    }
   
    console.log("temp", temp)
}

function ms( arr, low, high){
    if(low<=high){
        return
    }
    let mid = (low+high)/2
    ms(arr, low, mid)
    ms(arr, mid+1, high)
    merge(arr, low, mid, high)
    console.log("arr", arr)
}

let arr = [1,2,4,5,8,3,45,8,5,4,8]
ms(arr,0,arr.length)