'use strict';
let Node = require('./stackNode.js');

let Stack = module.exports = function(maxSize) {
  this.maxSize = maxSize;
  this.top = null;
  this.size = 0;
};

Stack.prototype.pop = function() {
  //assign top to temp val
  //assign temp.prev to top
  //decrease size by one
  //return temp.val
};
Stack.prototype.push = function() {

};
Stack.prototype.peek = function() {

};
