'use strict'

const Node = require('./node')

const Stack = module.exports = function(maxSize) {
  this.top = null
  this.size = 0
  this.maxSize = maxSize || null
}

Stack.prototype.push = function(val) {
  if ((typeof val) === 'string') {
    if (this.size < this.maxSize || this.maxSize === null) {
      this.top = new Node(val, this.top)
      this.size ++
      return
    }
  }
  return Error
}

Stack.prototype.pop = function(){
  if (this.top) {
    let current = this.top
    this.top = current.prev
    this.size --
    return current.val
  }
  return null
}

Stack.prototype.peek = function() {
  return this.top.val
}
