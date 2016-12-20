const Node = require('./node.js');

const Queue = module.exports = function() {
  this.front = null;
  this.back = null;

};

Queue.prototype.enqueue = function(val) {
  const newNode = new Node(val);

  if(!this.back) {

    this.back = newNode; // Need 1
    this.front = this.back;
    return;

  }
  this.back.prev = newNode;
  this.back = newNode; // Need 1
  // create a new node using val as node.val
  // and assign the back.prev to new node
  // assign the new node to the back of the queue

};
Queue.prototype.dequeue = function() {
  if(!this.front) throw new Error('error');
  let temp = this.front.val;
  if(this.front === this.back) {
    this.back = null;

  }
  this.front = this.front.prev;
  return temp;

};