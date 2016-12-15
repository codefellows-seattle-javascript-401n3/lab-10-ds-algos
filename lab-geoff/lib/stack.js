'use strict';
let Node = require('./stackNode.js');

let Stack = module.exports = function(maxSize) {
  this.maxSize = maxSize;
  this.top = null;
  this.size = 0;
};

Stack.prototype.push = function(val) {
  let node = new Node(val, this.top);
  this.top = node;
  this.size += 1;
  //something to handle maxSize
};
Stack.prototype.pop = function() {
  let temp = this.top;
  //assign temp.prev to top
  //decrease size by one
  return temp.val;
};
Stack.prototype.peek = function() {

};
