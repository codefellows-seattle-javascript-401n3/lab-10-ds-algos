# Data Structures & Algorithm for Towers of Hanoi

In this project I have implemented the Stack and Queue data structures which can be found in their own modules in the lib directory. Stacks are a first in last out structures whereas queues are a first in first out. The stack and queue may by filled with nodes so I have provided a node module, as well.

The Stack and Node modules are used to solve the [Towers of Hanoi] (https://en.wikipedia.org/wiki/Tower_of_Hanoi). You can find the algorithm for this in the challenge module.

## Node Module

Instantiate a new node `new Node(val, [prev])`

### Properties

val: Pass this value in when instantiating. Only numbers are allowed.

prev: Optional, references previous node and will default to null if not passed in.

## Stack Module

Instantiate a stack ```new Stack([maxSize])```

### Properties

top: References top node. Defaults to null.

maxSize: Optional and will default to null if not passed in.

size: Number of nodes on the stack. Defaults to 0.

### Stack Methods

`.push(val)` - Adds a new node with a value of `val` to the top of the stack and increases stack size by 1. If maxSize has been reached, an error will be returned.

`.pop()` - Removes the top node of a stack, decreases stack size by 1 and returns the removed node's value.

`.peek()` - Returns the top node value in the stack.


## Queue Module

Instantiate a queue ```new Queue()```

###Properties

front: References the front node. Defaults to null.

back: References the back node. Defaults to null.

### Queue Methods

`.enqueue(val)` -  Adds a new node with a value of `val` to the back of the queue.

`.dequeue()` - Removes a node from the front of the queue and returns the removed node's value.

## Challenge Module - Towers of Hanoi

### Run

The following command will run the challenge with n disks. N may be any number.

`node index.js n`

This command will return the total number of moves needed to complete the [Towers of Hanoi] (https://en.wikipedia.org/wiki/Tower_of_Hanoi) in the least amount moves as well as the final stacks.

### Challenge Methods

`.setupTower(numDisks, arr)` -

`.moveSmallestDisk(arr)` -

`.moveNextSmallestDisk(arr)` -

`.runChallenge(numDisks)` -
