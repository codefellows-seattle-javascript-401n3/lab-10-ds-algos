'use strict';

// app modules
const Stack = require('./stack.js');

let currentIndex = 0;

exports.setupTower = function(n, arr) {
  for(let i = n ; i > 0 ; i--) {
    arr[0].push(i);
  }
};

exports.moveSmallestDisk = function(arr) {
  arr[currentIndex].pop();

  if(currentIndex !== 2) {
    arr[currentIndex + 1].push(1);
    currentIndex ++;
    return currentIndex;
  }

  arr[0].push(1);
  currentIndex = 0;
  return currentIndex;
};

exports.moveNextSmallestDisk = function(arr) {
  const compArr = [{stack: arr[0], index: 0}, {stack: arr[1], index: 1}, {stack: arr[2], index: 2}];
  compArr.splice(currentIndex, 1);

  if(compArr[0].stack.top === null) {
    const smallerVal = arr[compArr[1].index].pop();
    arr[compArr[0].index].push(smallerVal);
    return;
  } else if(compArr[1].stack.top === null) {
    const smallerVal = arr[compArr[0].index].pop();
    arr[compArr[1].index].push(smallerVal);
    return;
  } else if(compArr[0].stack.top.val < compArr[1].stack.top.val ) {
    const smallerVal = arr[compArr[0].index].pop();
    arr[compArr[1].index].push(smallerVal);
    return;
  } else {
    const smallerVal = arr[compArr[1].index].pop();
    arr[compArr[0].index].push(smallerVal);
  }

};

exports.runChallenge = function(numDisks) {
  const stacks = [new Stack(), new Stack(), new Stack()];
  let counter = 0;

  exports.setupTower(numDisks, stacks);

  while (stacks[1].size !== numDisks && stacks[2].size !== numDisks) {
    console.log(counter);
    if(counter % 2 === 0) {
      exports.moveSmallestDisk(stacks);
      counter ++;
    } else {
      exports.moveNextSmallestDisk(stacks);
      counter ++;
    }
  }

  console.log('final stacks', stacks);
  console.log('final counter', counter);
  return [stacks, counter];
};
