'use strict';

let Node = require('./queueNode.js');

let Queue = module.exports = function() {
  this.front = null;
  this.back = null;
};

Queue.prototype.enqueue = function() {
  // add new node to queue
};

Queue.prototype.dequeue = function() {
  // remove front node from queue
};