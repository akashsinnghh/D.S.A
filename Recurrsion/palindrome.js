function palindrome(i, str){
    if(i>= str.length) return true
    if(str[i] != str[str.length-i-1]) return false
    return palindrome(i+1,str)
}

console.log(palindrome(0,"madm"))