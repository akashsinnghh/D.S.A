function nearestGreaterToRight(arr) {
    const stack = [];
    const result = [];
  
    for (let i = arr.length - 1; i >= 0; i--) {
      while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
        stack.pop();
      }
      if (stack.length === 0) {
        result.push(-1);
      } else {
        result.push(stack[stack.length - 1]);
      }
      stack.push(arr[i]);
    }
  
    return result.reverse();
  }
  
  // Example usage:
  const arr = [1, 3, 2, 4];
  const result = nearestGreaterToRight(arr);
  console.log(result); // Output: [-1, 4, 4, 4]
  

// function nearestGreaterToRight(arr) {
//     const stack = [];
//     const result = [];
    
//     for (let i = arr.length - 1; i >= 0; i--) {
//       while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
//         stack.pop();
//       }
      
//       if (stack.length === 0) {
//         result.push(-1);
//       } else {
//         result.push(stack[stack.length - 1]);
//       }
      
//       stack.push(arr[i]);
//     }
    
//     return result.reverse();
//   }
  
//   const arr = [1, 3, 2, 4];
//   const result = nearestGreaterToRight(arr);
//   console.log(result); // [-1, 4, 4, -1]
  