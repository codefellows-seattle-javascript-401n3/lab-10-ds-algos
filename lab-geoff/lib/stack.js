'use strict';
let Node = require('./stackNode.js');

let Stack = module.exports = function(maxSize) {
  this.maxSize = maxSize;
  this.top = null;
  this.size = 0;
};

Stack.prototype.push = function(val) {
  if(this.size === this.maxSize) {
    throw new Error(`Stack is full. Could not add ${val}.`);
  }
  let node = new Node(val, this.top);
  this.top = node;
  this.size += 1;
};

Stack.prototype.pop = function() {
  if(!this.top) {
    throw new Error('Stack is empty');
  }
  let temp = this.top;
  this.top = temp.prev;
  this.size -= 1;
  return temp.val;
};

Stack.prototype.peek = function() {
  if(!this.top) {
    throw new Error('Stack is empty');
  }
  return this.top.val;
};
