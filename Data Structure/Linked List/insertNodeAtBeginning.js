let arr = { val: 1, next: { val: 8, next: { val: 3, next: { val: 9, next: { val: 5, next: null } } } } }
class node{
    constructor(data, next = null){         //this.next = next assigns the next parameter to the next property of the current object.
        this.data=data,                     // If the next parameter is not provided when the object is created, 
        this.next=next                      //it will default to null due to the = null part of the parameter declaration.
    }
}
let currentNode = arr
let newNode = new node(99)

// Update the next property of the new node to point to the current head of the linked list
newNode.next = arr;

// Update the head of the linked list to point to the new node
arr = newNode;

console.log(arr)
