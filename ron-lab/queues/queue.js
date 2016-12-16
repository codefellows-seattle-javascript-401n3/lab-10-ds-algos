'use strict';

const Node = require('./node');
const Queue = module.exports = function() {
  this.front = null;
  this.back = null;
};

Queue.prototype.enqueue = function(val) {
  if(!this.back) {
    this.back = new Node(val);
    this.front = this.back;
    return;
  }
  this.back.prev = new Node(val);
  this.back = this.back.prev;
};

Queue.prototype.dequeue = function() {
  if(this.front.prev) {
    let cur = this.front;
    this.front = this.front.prev;
    return cur.val;
  } else if(this.front) {
    let cur = this.front;
    this.front = null;
    return cur.val;
  }
  return null;
};
