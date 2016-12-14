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
  const currentTop = this.top;
  this.top = currentTop.prev;
  return currentTop;
};

Stack.prototype.peek = function() {
  return this.top;
};
