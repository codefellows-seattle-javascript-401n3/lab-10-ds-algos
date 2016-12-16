'use strict';

const Node = require('./node.js');
const Stack = require('./stack.js');

//Assign 3 stacks

let a = new Stack();
let b = new Stack();
let c = new Stack();

let stacks = [a, b, c];

function createFirstTower(n) {
  for (var i = n; i > 0; i--) {
    a.push(i);
  }
} // n to be any size

createFirstTower(6); // 6 disks on stack