'use strict';

const hanoi = require('./lib/hanoisolutions');
const Stack = require('./lib/stack');

let a = new Stack([6, 5, 4, 3, 2, 1]);
let b = new Stack();
let c = new Stack();

hanoi.solveHanoiIterative(a, b, c);

console.log('End pole length: ' + c.length);
console.log('End pole: ' + c);
console.log(c.pop());
console.log(c.pop());
console.log(c.pop());
console.log(c.pop());
console.log(c.pop());
console.log(c.pop());
