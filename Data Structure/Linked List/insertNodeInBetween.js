let arr = { val: 1, next: { val: 8, next: { val: 3, next: { val: 9, next: { val: 5, next: null } } } } }
class node{
    constructor(data, next = null){
        this.data=data,
        this.next=next
    }
}
let currentNode = arr
let newNode = new node(99)
while(currentNode.val !== 8){
    console.log("entered")
    currentNode = currentNode.next
}
// insert new node after current node
newNode.next = currentNode.next; // set newNode's next to current node's next
currentNode.next = newNode; // set current node's next to newNode
console.log("arr",arr)


//                                              Insert at the End

// let arr = { val: 1, next: { val: 8, next: { val: 3, next: { val: 9, next: { val: 5, next: null } } } } }
// class node{
//     constructor(data, next = null){
//         this.data=data,
//         this.next=next
//     }
// }
// let currentNode = arr
// let newNode = new node(99)
// while(currentNode.next !== null){
//     console.log("entered")
//     currentNode = currentNode.next
// }
// // insert new node after current node
// newNode.next = currentNode.next; // set newNode's next to current node's next
// currentNode.next = newNode; // set current node's next to newNode
// console.log("arr",JSON.stringify(arr))
