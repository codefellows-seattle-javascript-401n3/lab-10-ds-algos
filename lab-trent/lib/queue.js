'use strict';

const Node = require('./node');

let Queue = module.exports = function(values) {
  this.head = null;
  this.tail = null;
  if (values) {
    values.forEach((val) => {
      this.enqueue(val);
    });
  }
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
  let temp = this.head.value;
  this.head = this.head.prev;
  return temp;
};
