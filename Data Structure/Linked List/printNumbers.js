// Define the Node class
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Create the linked list
let head = new Node(1);
let current = head;
for (let i = 2; i <= 5; i++) {
  current.next = new Node(i);
  current = current.next;
}

// Print the linked list
current = head;
while (current != null) {
  console.log(current.data);
  current = current.next;
}

//                                                                      QnA Time Guys

// 1.                                                       What is the Flow of this code ?
// First, we define a Node class to represent the nodes of the linked list. Each node has two properties: data to store the value of the node, 
//   and next to store the reference to the next node in the list.

// Next, we create the head node of the linked list with a value of 1, and assign it to the head variable. 
// We also create a variable current to keep track of the current node we are working with.

// Then, we use a for loop to create the remaining nodes of the linked list, each containing a value from 2 to 5.
// We assign the reference to each new node to the next property of the current node, and update the current variable to point to the new node.

// After creating the linked list, we use a while loop to traverse the list and print the data of each node. 
// We start by assigning the current variable to the head node, and then repeatedly print the data of the current node and
// move to the next node until we reach the end of the list (i.e., the next property of the current node is null).


// 2.                   why have me made a class node and a constructor inside it what is the use of this two ?
// We create the Node class to represent the nodes of the linked list, and the constructor method inside the class is used to 
// initialize the properties of each node object.

// In JavaScript, classes are a way to create reusable object blueprints with properties and methods. The Node class defines the
// blueprint for creating nodes of the linked list, and each node object created from this blueprint will have a data property to
// store the value of the node and a next property to store the reference to the next node in the list.

// The constructor method is a special method that gets called automatically when we create a new instance of the
// class (i.e., when we create a new node object). Inside the constructor, we define the initial values for the data and next properties
// of the node object using the this keyword to refer to the current object being created.

// So when we create a new node object using the new Node(data) syntax, the constructor initializes the data and next properties 
// of the node with the provided data value and a null reference to the next node, respectively.

// Overall, using a class to define the Node objects and a constructor to initialize their properties makes it easier to create 
// and manage the nodes of the linked list in our code.

//3.                                          why do we use new keyword over here  ?
// We use the new keyword to create a new instance of the Node class, which will create a new object with the properties and methods defined in the class.

// In JavaScript, the new keyword is used to create new instances of a constructor function or a class. When we use the syntax new Node(data),
// the JavaScript engine creates a new object that is an instance of the Node class and then calls the constructor method of the class with the provided data argument.

// The result of this operation is a new node object with the data property initialized to the provided value, and the next property initialized to null.

// We use the new keyword to create multiple instances of the Node class to form the linked list. Each instance represents a node in the list,
// and the next property of each node points to the next node in the list. By using the new keyword to create instances of the Node class,
// we can create and connect multiple nodes to form a linked list data structure.

//4 why did we use linked list just to print those 5 values, we can also use a simple array to do, then why should we use this linked list ?
// You are correct that we could use a simple array to store and print the values 1 to 5. However, the linked list is a data structure that has
// some advantages over an array in certain situations.

// One advantage of a linked list is that it allows for efficient insertion and deletion of elements at any position in the list,
//   whereas with an array, inserting or deleting elements can be less efficient because the elements after the insertion or deletion 
//   point need to be shifted in memory to make room for the new or removed element.

// Another advantage of a linked list is that it does not require a fixed amount of memory to be allocated upfront, unlike an array which needs
// to be allocated with a fixed size. This means that a linked list can be more memory-efficient than an array for large data sets that are constantly changing in size.

// In our specific example of printing the values 1 to 5, a simple array would indeed be a more straightforward and efficient solution.
// However, in other scenarios where we need to perform frequent insertions or deletions, or where we don't know the size of the data set
// in advance, a linked list can be a more appropriate data structure to use.
