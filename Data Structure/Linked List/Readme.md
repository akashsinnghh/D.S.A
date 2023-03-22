What is Linked List ?

A linked list is a collection of nodes in non-contiguous memory locations where every node contains some data and a pointer to the next node of the same data type. In other words, the node stores the address of the next node in the sequence. A singly linked list allows traversal of data only in one way.

![Linked list](https://user-images.githubusercontent.com/86508200/226925875-04315102-7635-47bd-b258-4d35f29091f5.png)

Following are the terms used in Linked Lists :<br>
  ● Node:A node in a singly linked list contains two fields ○ Datafield which stores the data at the node ○ A pointerthat contains the address of the next node in the sequence. <br>
  ● Head:The first node in a linked list is called the head. The head is always used as a reference to traverse the list. <br>
  ● Tail: The last node in a linked list is called the tail. It always contains a pointer to NULL (since the next node is NULL), denoting the end of a linked list.<br>
  
 Biggest question is WHY and WHAT is the use of linked list in DS as we can do all the opertions over an array ?
 
 **Arrays:**                                                                        **Linked List**              
 Pros:                                                                              Pros:
  1.Constant time access to elements by index                                         1.Dynamically grow or shrink as elements are added or removed.
  2.Constant time access to first and last elements                                   2.Constant time insertion and deletion of elements at the beginning or end.
  3.Efficient for small collections                                                   3.Efficient for large collections or frequent insertion/deletion of elements    
  4.Easy to implement.                                                                4.No memory wasted.
  5. It is Contigous which means                                                      5.It is Non-Contigous which means
    ![image](https://user-images.githubusercontent.com/86508200/226931273-b7bc6add-3ab7-4318-aaf2-c4fbd63f1eb0.png)![image](https://user-images.githubusercontent.com/86508200/226932011-21f99018-846f-42e2-95e2-99556162de78.png)


  
  Cons:                                                                              Cons:
    1.Fixed size                                                                      1.Linear time access to elements
    2.Inefficient for large collections or                                            2.More complex to implement and use than arrays
      frequent insertion/deletion of elements                                         3.Not cache friendly
    3.May waste memory if not fully utilized

How to master Linked List:-
 Link :- https://dynalist.io/d/5SccLds9RQxoDmuzkuCRE2ki

