let Node = require('./node.js');
/*
let val;
let newNode = new Node(val);
*/


let Queue = function(){
  this.front = null;
  this.back = null;
};

Queue.prototype.enqueue  = function(val) {
  let newNode = new Node(val);
  if(!this.back) {
    this.back = newNode;
    this.front = this.back;
    return;
  } else {
    this.back.prev = newNode;
    this.back = this.back.prev;
  }
};

Queue.prototype.dequeue = function(){
  let temp = this.front;
  if(this.front && this.front === this.back) {
    this.front = null;
    this.back = null;
    return temp.val;
  } else {
    this.front = temp.prev;
    return temp;
  }
};

module.exports = Queue;
