'use strict';

const Node = require('../node.js');

const Queue = module.exports = function(){
  this.front = null;
  this.back = null;
};

Queue.prototype.enqueue = function(val){
//create a new node using val as node.val
//aand assign the back.prev to the new node
//assign the new node to the back of the Q
  const newNode = new Node(val);
  if(!this.back){
    this.back = newNode;
    this.front = this.back;
    return; //to break here and not run next block of code, or wrap next block of code in an else block
  }
  this.back.prev = newNode;
  this.back = newNode;
};

Queue.prototype.dequeue = function(){
  if(!this.front){
    return null;
  }
  let temp = this.front.val;
  if(this.front === this.back){
    this.back = null;
  }
  this.front = this.front.prev;
  return temp;
};
