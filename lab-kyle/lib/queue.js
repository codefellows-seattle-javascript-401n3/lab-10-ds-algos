'use strict'

const Node = require('.node')

const Queue = module.exports = function() {
  this.front = null
  this.back = null
}

Queue.prototype.enqueue = function(val) {
  const newNode = new Node(val)

  if (!this.back) {
    this.back = newNode
    this.front = this.back
    return
  }

  this.back.prev = newNode
  this.back = newNode
}

Queue.prototype.dequeue = function() {
  let currentFront = this.front

  if(this.front.prev) {
    this.front = this.front.prev
    return currentFront.val
  } else if(this.front) {
    this.front = null
    this.back = null
    return currentFront.val
  }
  return null
};
