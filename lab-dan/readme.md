#Data Structures & Algorithms
### Stacks & Queues

This implementation of stack and queues are contained in separate modules, along with a shared node module (since both need simple nodes that use the same parameters--```value``` and ```previousNode```).

The ```index.js``` allows you to "run" this from the command line, using one of the required flags: ```-q``` to create a queue, or ```-s``` to create a stack. It will console log and return the generated data structure.

Additionally, from the command line you can input a series of values as comma separated values in a string as your second argument to automatically generate your data structure with values and a 3rd argument of maxSize to define the maxSize of your stack (the queue will simply ignore this argument).

###Tower of Hanoi###
There is also an implementation of Tower of Hanoi in this, which uses the stack module. Right now you can try out the iterative solution. You can also run this from the command line using ```node index.js -i n```. ```n``` should be an integer for how big of a tower you want to solve. The ```-i``` flag stands for iterative, in case you were wondering.

_As a side note, due to time, the tests do not cover the automatically created data structures via array. I'll need to return to that when I am able!_
