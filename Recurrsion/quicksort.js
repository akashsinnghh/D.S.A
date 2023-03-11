function quicksort(array) {
    if (array.length <= 1) {
      return array;
    }
  
    const pivot = array[0];
    const left = [];
    const right = [];
  
    for (let i = 1; i < array.length; i++) {
      if (array[i] < pivot) {
        left.push(array[i]);
      } else {
        right.push(array[i]);
      }
    }
  
    const sortedLeft = quicksort(left);
    const sortedRight = quicksort(right);
  
    const sortedArray = [];
    for (let i = 0; i < sortedLeft.length; i++) {
      sortedArray.push(sortedLeft[i]);
    }
    sortedArray.push(pivot);
    for (let i = 0; i < sortedRight.length; i++) {
      sortedArray.push(sortedRight[i]);
    }
  
    return sortedArray;
  }
  
  const array = [2, 5, 4, 8, 6, 21, 14, 5];
  const sortedArray = quicksort(array);
  
  console.log(sortedArray);
  











// with spread operator

// function quicksort(array) {
//     if (array.length <= 1) {
//       return array;
//     }
    
//     const pivot = array[0];
//     const left = [];
//     const right = [];
    
//     for (let i = 1; i < array.length; i++) {
//       if (array[i] < pivot) {
//         left.push(array[i]);
//       } else {
//         right.push(array[i]);
//       }
//     }
    
//     return [...quicksort(left), pivot, ...quicksort(right)];
//   }
  
//   const array = [2, 5, 4, 8, 6, 21, 14, 5];
//   const sortedArray = quicksort(array);
  
//   console.log(sortedArray);



  
