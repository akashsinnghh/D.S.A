// program to remove duplicate value from an array

function getUnique(arr){
    
    let uniqueArr = [];
    for(let i of arr) {
        if(uniqueArr.indexOf(i) === -1) {                                    // using indexOf()
            uniqueArr.push(i);                                            //how does indexOf works?
        }                                                               //what we are doing here is we have created a empty array. Then when push each index
    }                                                                   // but indexOf checks that value is present or not in the array, if not it returns `-1`. And
    console.log(uniqueArr);                                              // the value is pushed into the array. And if present it doesn't returns `-1`
}

const array = [1, 2, 3, 2, 3];

getUnique(array);

//                                                 Or

function dupli(arr){
    let arr3 = []
    for(let i=0;i<arr.length;i++){
        if(!arr3.includes(arr[i])){  // here we are use `includes` which returns true if element is not present
            arr3.push(arr[i])          // if value is not present in `arr3` then value will get pushed in arr3.
        }
    }
    console.log(arr3)
}
dupli(array)
