'use strict';

const Node = require('./node.js');
const Stack = module.exports = function(maxSize) {
  this.top = null;
  this.maxSize = maxSize || null;
  this.size = 0;
};

Stack.prototype.push = function(val) {
  this.top = new Node(val, this.top);
  this.size += 1;
};


Stack.prototype.pop = function() {
  if(this.top === this.back) {
    let cur = this.top;
    this.top = this.prev;
    return cur.val;
  }
  return;
};

Stack.prototype.peek = function () {
  return this.top.val;
};
