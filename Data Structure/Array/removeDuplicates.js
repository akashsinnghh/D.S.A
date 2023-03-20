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
