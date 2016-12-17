'use strict';

// app modules
const Stack = require('./stack.js');

let stackA = new Stack();
let stackB = new Stack();
let stackC = new Stack();

//do these indices point to the same value in memory as objects above??
let stacks = [stackA, stackB, stackC];
// this is where we start
let counter = 0;
//this is the starting position of the smallest disk
let currentIndex = 0;
// need to create stack a and push n numbers on in correct order
function createTowerA(n) {
  for(let i = n ; i > 0 ; i--) {
    stackA.push(i);
  }
}

// we should keep track of smallest disk's current position
// always move +1 index
// if index is index 2 then move to index 0
function moveSmallestDisk() {
// we dont need to save this val because the smallest will always be 1
  stacks[currentIndex].pop();
  if(currentIndex !== 2) {
    stacks[currentIndex + 1].push(1);
// smallest disk has new location so we need to reassign currentIndex
    currentIndex ++;
    return;
  }
  stacks[0].push(1);
// smallest disk has new location so we need to reassign currentIndex
  currentIndex = 0;
}
// compare top of stacks not containing smallestTop
// the smaller of the two will be moved to the top of the other
// what about null tops?
// if one of the stacks is null we will move to that stack
function nextSmallestDisk() {
  const compArr = [{stack: stacks[0], index: 0}, {stack: stacks[1], index: 1}, {stack: stacks[2], index: 2}];
  compArr.splice(currentIndex, 1);
// stacks.splice(currentIndex, 1); //this was changing original stacks arr
  if(compArr[0].stack.top === null) {
    const smallerVal = stacks[compArr[1].index].pop();
    console.log('val popped', smallerVal);
    stacks[compArr[0].index].push(smallerVal);
    console.log(stacks);
    return;
  } else if(compArr[1].stack.top === null) {
    const smallerVal = stacks[compArr[0].index].pop();
    console.log('val popped', smallerVal);
    stacks[compArr[1].index].push(smallerVal);
    console.log(stacks);
    return;
  } else if(compArr[0].stack.top.val < compArr[1].stack.top.val ) {
    const smallerVal = stacks[compArr[0].index].pop();
    console.log('val popped', smallerVal);
    stacks[compArr[1].index].push(smallerVal);
    console.log(stacks);
    // console.log(stacks[2].top.prev);
    return;
  } else {
    const smallerVal = stacks[compArr[1].index].pop();
    console.log('val popped', smallerVal);
    stacks[compArr[0].index].push(smallerVal);
    console.log(stacks);
  }
}

function runChallenge(numDisks) {

  createTowerA(numDisks);

  while (stacks[1].size !== numDisks || stacks[2].size !== numDisks) {
    console.log(counter);
    if(counter % 2 === 0) {
      moveSmallestDisk();
      counter ++;
    } else {
      nextSmallestDisk();
      counter ++;
    }
  }
  console.log('final stacks', stacks);
  console.log('final counter', counter);
}

runChallenge(3);
