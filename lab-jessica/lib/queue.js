'use strict';

const Node = require('./node.js');

const Queue = module.exports = function(arr) {
  this.front = null;
  this.back = null;

  if(Array.isArray(arr)) {
    arr.forEach(ele => {
      this.enqueue(ele);
    });
  }
};

Queue.prototype.enqueue = function(val) {
  if(!this.front) {
    this.front = new Node(val);
    this.back = this.front;
    return;
  }

  this.back.prev = new Node(val);
  this.back = this.back.prev;
};

Queue.prototype.dequeue = function() {
  const currentFront = this.front;

  if(this.front) {
    if(this.front.prev) {
      this.front = this.front.prev;
      return currentFront.val;
    }
    this.front = null;
    this.back = null;
    return currentFront.val;
  }

  return this.front;
};
