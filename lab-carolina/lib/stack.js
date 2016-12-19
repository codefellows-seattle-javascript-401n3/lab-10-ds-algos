'use strict';

const Node = require('../node.js');

const Stack = module.exports = function(maxSize){
  this.top = null;
  this.maxSize = maxSize || null;
  this.size = 0;
};

Stack.prototype.push = function(val){
//a new node should be created with val and prev node
//no return value here
  if(this.size === this.maxSize){
    return Error;
  }
  this.top = new Node(val, this.top);
  this.size += 1;
};

Stack.prototype.pop = function(){
  if(!this.top){
    return null;
  }
  let temp = this.top.val;
  this.top = this.top.prev;
  return temp;
  //remove the node assigned to the top of the Stack
  //previous node assigned to the top
  //return the value of node removed
};

Stack.prototype.peek = function(){
  if(!this.top){
    return null;
  }
  return this.top.val;
  //return value of the top node
};
