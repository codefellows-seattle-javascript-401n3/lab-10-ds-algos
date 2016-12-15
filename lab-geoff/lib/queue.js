'use strict';

let Node = require('./queueNode.js');

let Queue = module.exports = function() {
  this.front = null;
  this.back = null;
};

Queue.prototype.enqueue = function(val) {
  let node = new Node(val);
  if(!this.front) {
    this.front = node;
    this.back = node;
    return;
  }
  this.back.prev = node;
  this.back = node;
};

Queue.prototype.dequeue = function() {
  if(this.front) {
    let temp = this.front;
    if(this.front === this.back) {
      this.front = null;
      this.back = null;
    } else {
      this.front = temp.prev;
    }
    return temp.val;
  }
  return null;
};