'use strict';

const hanoi = require('./lib/hanoisolutions');
const Stack = require('./lib/stack');

let a = new Stack([9, 8, 7, 6, 5, 4, 3, 2, 1]);
let b = new Stack();
let c = new Stack();

hanoi.solveHanoiIterative(a, b, c);

console.log('End pole length: ' + c.length);
console.log('End pole: ' + c);
let length = c.length;
for (let i = 0;i < length;i++) {
  console.log(c.pop());
}
