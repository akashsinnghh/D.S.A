//                    Nearest Greatest To Left
let arr = [1, 3, 2, 4]

function ngl(arr) {
    let result = []
    let stack = []
    for (let i = arr.length - 1; i => 0; i--) {
        if (s.length == 0) {
            result.push(-1)
        } else {
            result.push(stack[stack.length - 1]);
        }
    }
    console.log(result)
    console.log(stack)
}