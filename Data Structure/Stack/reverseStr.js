function reverseString(str) {
    let stack = [];
    let result = "";
  
    // push each character onto the stack
    for (let i = 0; i < str.length; i++) {
      stack.push(str[i]);
    }
  
    // pop each character off the stack and append to the result
    while (stack.length > 0) {
			result += stack.pop();
			console.log("res:",result)
    }
  
    return result;
  }
  
  console.log(reverseString("hello world")); // output: "dlrow olleh"
  