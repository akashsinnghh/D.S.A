function nums(n){
    if(n<1){
      return 1
    }
    else return n*nums(n-1)
  }
  
  console.log(nums(5))