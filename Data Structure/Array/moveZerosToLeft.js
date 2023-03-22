let array = [1,10,-1,11,5,0,-7,0,25,-35]

let moveZerosToLeft = function(A) {
   let zeros =0
  let i = 0, k=0
  while(i<A.length){
    if(A[i] == 0){
        zeros++
      while(k<zeros){
          A[k] = 0
          k++
      }
      A.splice(i,1)
    }
    i++
  }
  return A
}
console.log(moveZerosToLeft(array))