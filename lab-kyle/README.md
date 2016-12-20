# Code Fellows 401 Lab 10 - Data Structures and Algorithms

## Desciption

This project is a simple example of a node, stack, and queue module. The node module
simply has a value and a previous property to help ensure it is aware of the next module in either the queue or stack. The stack module follows the principle of LILO - also known
as *last in last out*. The queue module follows the principle of FIFO - *first in first out*. There are also tests included to ensure the code runs properly.

### Node module

  * properties
    * `val` - the value of the node
    * `prev` - the value of the previous node


### Stack module

  * properties
    * `top` - the top most node of the stack **NOTE: Defaults to NULL**
    * `size` - the size (number of nodes) of the stack
    * `maxSize` - **Optional** maximum size to the stack **NOTE: Defaults to NULL**

  * methods
    * `pop()` - will remove the top node and return its value
    * `push()` - will add a node to the top of the stack
    * `peek()` - allows you to view the value of the top node **NOTE: READ ONLY**

### Queue module

  * properties
    * `front` - the front node in the Queue
    * `back` - the back node in the queue

  * methods
    * `enqueue` - adds a node to the back of the queue
    * `dequeue` - removes the node from the front of the queue and returns the value


### Hanoi module

The [Tower of Hanoi](https://en.wikipedia.org/wiki/Tower_of_Hanoi) is a math puzzle
requiring the user to move a certain number of discs from one peg to another peg with
various constraints. You may never place a smaller disc on top of a larger disc and
you may only move one disc at a time.

I used an iterative solution that follows a simple patter of moving a disc between two
specified pegs in one of three ways. If the number if discs is even, the first move is
between pegs a and b, the second move is between pegs a and c, with the final move being
between pegs b and c. You repeat this process until the puzzle is solved, always moving
the smaller of the two discs.

If the number of disc is odd it follows a similar pattern but with the order of pegs involved being altered slightly.
