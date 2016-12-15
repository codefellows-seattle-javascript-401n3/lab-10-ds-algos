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
  // remove front node from queue
};