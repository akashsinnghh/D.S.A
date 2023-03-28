// Remove the nth node from the end of linked list
const removeNthFromEndd = (head, n) => {
    // Create a dummy node to handle the case where the head node is removed
    const dummy = {next: head};
    let slow = dummy;
    let fast = head;
    
    // Move the fast pointer n+1 nodes ahead of the slow pointer
    for (let i = 0; i < n; i++) {
      fast = fast.next;
    }
    
    // Move both pointers together until the fast pointer reaches the end
    while (fast) {
      slow = slow.next;
      fast = fast.next;
    }
    
    // Remove the nth node from the end by setting the slow pointer's next node to the node after it
    slow.next = slow.next.next;
    
    // Return the head of the updated list (skip the dummy node)
    return dummy.next;
  };
  
  // Example usage
  const list = { val: 2, next: { val: 4, next: { val: 1, next: { val: 3, next: { val: 5, next: { val:6,next:null} } } } } };
  const n = 4;
  const updatedList = removeNthFromEndd(list, n);
  console.log(updatedList); // Output: { val: 2, next: { val: 4, next: { val: 1, next: { val: 5, next: { val: 6, next: null } } } } } 
  
  const removeNthFromEnd = function(head, n) {
    let length = 0;
    let current = head;
    
    // Calculate the length of the linked list
    while (current) {
      length++;
      current = current.next;
    }
    
    // Calculate the position of the node to be removed from the beginning
    let position = length - n + 1;
    
    // If the node to be removed is the head node, update the head
    if (position === 1) {
      head = head.next;
      return head;
    }
    
    // Traverse the linked list again to remove the node at the calculated position
    current = head;
    let prev = null;
    let count = 1;
    
    while (current && count !== position) {
      prev = current;
      current = current.next;
      count++;
    }
    
    prev.next = current.next;
    
    return head;
  };

  removeNthFromEnd(list, 4);
  const updatedListt = removeNthFromEnd(list, n);
  console.log(updatedListt);

  
  
  