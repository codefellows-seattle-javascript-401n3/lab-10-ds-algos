'use strict';

const Node = require('./node');

let Stack = module.exports = function(arg) {
  this.maxSize = (typeof arg === 'number') ? arg : null;
  this.curr = null;
  this.length = 0;
  if (arg instanceof Array) {
    arg.forEach((val) => {
      this.push(val);
    });
  }
};

Stack.prototype.push = function(val) {
  if (this.maxSize && this.length >= this.maxSize) {
    throw new Error('Stack overflow.');
  }
  this.length++;
  this.curr = new Node(val, this.curr);
};

Stack.prototype.pop = function() {
  if (!this.curr) {
    throw new Error('Stack underflow.');
  }
  this.length--;
  let val = this.curr.value;
  this.curr = this.curr.prev;
  return val;
};

Stack.prototype.peek = function() {
  if (!this.curr) {
    return null;
  }
  return this.curr.value;
};
