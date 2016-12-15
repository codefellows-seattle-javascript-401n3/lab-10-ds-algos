'use strict'

const Queue = require('../lib/queue')
const expect = require('chai').expect
const assert = require('chai').assert

describe('queue module', function() {

  describe('.enqueue', function() {
    it('should add something to the back of the queue', function(){
      let queue = new Queue()
      queue.enqueue(1)
      queue.enqueue(2)
      expect(queue.back.val).to.equal(2)
    })
    it('should add something to the front fo the queue if the queue is empty', function() {
      let queue = new Queue()
      queue.enqueue(1)
      expect(queue.front.val).to.equal(1)
    })
    it('should assign a new previous value to the node in front of it', function() {
      let queue = new Queue()
      queue.enqueue(12)
      queue.enqueue(10)
      expect(queue.front.prev.val).to.equal(10)
    })
  })

  describe('.dequeue', function() {
    it('should remove the node at the front of the queue', function() {
      let queue = new Queue()
      queue.enqueue(1)
      queue.enqueue(2)
      queue.dequeue()
      expect(queue.front.val).to.equal(2)
    })
    it('should return the val of the first node in the queue', function() {
      let queue = new Queue()
      queue.enqueue(1)
      expect(queue.dequeue()).to.equal(1)
    })
    it('should return null if there is nothing in the queue', function() {
      let queue = new Queue()
      expect(queue.dequeue()).to.equal(null)
    })
  })
})
