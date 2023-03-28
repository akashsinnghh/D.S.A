// function reverseLinkedList(head) {
//     let prev = null;
//     let current = head;
//     while (current !=null) {
//       let next = current.next;
//       current.next = prev;
//       prev = current;
//       current = next;
//     }
//     return prev;
//   }
  
//   // Example usage
//   const list = { val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: { val: 5, next: null } } } } };
//   console.log(reverseLinkedList(list)); // Output: { val: 5, next: { val: 4, next: { val: 3, next: { val: 2, next: { val: 1, next: null } } } } }
  
function reverseLinkedList(head) {
    let prev = null;
    let current = head;
    while (current != null) {
    //   console.log(`current: ${JSON.stringify(current)}`);
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    // console.log(`prev: ${JSON.stringify(prev)}`);
    return prev;
  }
  
  // Example usage
  const list = { val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: { val: 5, next: null } } } } };
  console.log(JSON.stringify(reverseLinkedList(list)));
    