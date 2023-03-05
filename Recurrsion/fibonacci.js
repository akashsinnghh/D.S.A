function fibonacci(n){
 if(n<=1){
   return n
 }
 let last = fibonacci(n-1)
 let sLast = fibonacci(n-2)
 return last+sLast
}

console.log(fibonacci(4))
