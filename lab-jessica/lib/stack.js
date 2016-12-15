const Node = require('./node.js');

const Stack = module.exports = function(maxSize) {
  this.top = null;
  this.maxSize = maxSize || null;
  this.size = 0;
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
