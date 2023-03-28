class Node {
    constructor(value, next = null) {
      this.value = value;
      this.next = next;
    }
  }
  
  let arr = [2,3,4,5];
  
  // convert the array to a linked list
  let head = new Node(arr[0]);
  let currentNode = head;
  for (let i = 1; i < arr.length; i++) {
    currentNode.next = new Node(arr[i]);
    currentNode = currentNode.next;
  }
  
  // find the node with the value "3"
  currentNode = head;
  while (currentNode.value !== 3 && currentNode.next !== null) {
    currentNode = currentNode.next;
  }
  
  // insert the value "1" after the node with the value "3"
  let newNode = new Node(1, currentNode.next);
  currentNode.next = newNode;
  
  // print the linked list
  currentNode = head;
  while (currentNode !== null) {
    console.log(currentNode.value);
    currentNode = currentNode.next;
  }

//   or
// let arr = { val: 1, next: { val: 8, next: { val: 3, next: { val: 4, next: { val: 5, next: null } } } } }
// let currentNode = arr;
// while (currentNode.val !== 3) {
//   currentNode = currentNode.next;
// }
// const newNode = { val: 3.5, next: currentNode.next };
// currentNode.next = newNode;


// let head = arr;
// while (head !== null) {
//   console.log(head.val);
//   head = head.next;
// }
// while(currentNode.val < 8){
//     currentNode = currentNode.next
// }
// const newNode = {val: 3.5, next:currentNode.next}
// currentNode.next = newNode;
//  let head = arr;
// while (head !== null) {
//   console.log(head.val);
//   head = head.next;
// }

  