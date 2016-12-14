'use strict';

let Queue = module.exports = function() {
  this.head = null;
  this.tail = null;
};

Queue.prototype.enqueue = function(val) {
  let node = new Node(val);
  if (!this.head) {
    this.head = this.tail = node;
  } else {
    this.tail.prev = node;
    this.tail = node;
  }
};

Queue.prototype.dequeue = function() {
  let temp = this.head.val;
  this.head = this.head.prev;
  return temp;
};
