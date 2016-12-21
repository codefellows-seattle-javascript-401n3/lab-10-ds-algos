'use strict';

const Node = require('./node.js');

const Stack = module.exports = function(maxSize, arr) {
  this.top = null;
  this.maxSize = maxSize || null;
  this.size = 0;

  if(Array.isArray(maxSize) && Array.isArray(arr)) {
    throw new Error('maxSize must not be an array');
  }

  if(Array.isArray(arr)) {
    arr.forEach(ele => {
      this.push(ele);
    });
  }

  if(arguments.length === 1 && Array.isArray(arguments[0])) {
    this.maxSize = null;
    arguments[0].forEach(ele => {
      this.push(ele);
    });
  }
};

Stack.prototype.push = function(val) {
  if(this.maxSize && this.size === this.maxSize) {
    return Error;
  }
  this.top = new Node(val, this.top);
  this.size += 1;
};

Stack.prototype.pop = function() {
  if(this.top) {
    const currentTop = this.top;
    this.top = currentTop.prev;
    this.size --;
    return currentTop.val;
  }
  return null;
};

Stack.prototype.peek = function() {
  if(this.top) {
    return this.top.val;
  }

  return this.top;
};
