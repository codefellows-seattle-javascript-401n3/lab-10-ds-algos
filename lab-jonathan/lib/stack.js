let Node = require('../lib/node.js');
let Stack = function(maxSize){
  this.top = null;
  this.size = 0;
  this.maxSize = maxSize || null;
};

Stack.prototype.push = function(val) {
  this.top = new Node(val, this.top);
  this.size += 1;
};

Stack.prototype.pop = function() {
  let temp = this.top.val;
  this.top = this.top.prev;
  this.size -= 1;
  return temp;
};

Stack.prototype.peek = function() {
  return this.top.val;
};

module.exports = Stack;
