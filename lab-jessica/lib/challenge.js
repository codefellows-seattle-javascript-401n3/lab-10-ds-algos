'use strict';
console.log('code is running');

// app modules
// const Node = require('./node.js');
const Stack = require('./stack.js');

let stackA = new Stack();
let stackB = new Stack();
let stackC = new Stack();

let stacks = [stackA, stackB, stackC];

// need to create stack a and push n disks on to it
function createTowerA(n) {
  for(let i = n ; i > 0 ; i--) {
    stackA.push(i);
  }
}

//this should move a disk top

// we want to identify the stack with the smallest top
function identifySmallestTop() {
  let smallestTop = stacks[0].top.val;
  // looping through stacks to find smallest disk
  for(let i = 0; i < stacks.length ; i++) {
    if(stacks[i] && stacks[i].top.val < smallestTop) {
      smallestTop = stacks[i].top.val;
    }
  }
  console.log(smallestTop);
  return smallestTop;
}

stackB.push(6);//just testing identifySmallestTop
stackC.push(4);//just testing identifySmallestTop


//this would go in index.js
createTowerA(6);
stackA.push(24); //just testing identifySmallestTop
identifySmallestTop();


// 2. Complete the code challenge using either an iterative or recursive solution
//   * If you choose to do both, put them in separate modules and document them in your README
//
//
// * The objective of the puzzle is to move the entire stack of disks from the starting stack to a new stack (i.e. from A to C, or A to B), obeying the following rules:
//   * No disk may be placed on top of a smaller disk
