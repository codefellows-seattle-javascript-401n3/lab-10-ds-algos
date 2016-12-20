'use strict'

const expect = require('chai').expect

const Queue = require('../lib/queue')

describe('Queue module', function () {
  describe('enqueue function', function () {
    it('should properly add a new node to an empty node', function () {
      let queue = new Queue()
      queue.enqueue(1)
      expect(queue.HEAD.value).to.equal(1)
      expect(queue.last.value).to.equal(1)
    })

    it('should properly add a new node to an existing queue', function() {
      let queue = new Queue()
      queue.enqueue(1)
      queue.enqueue(2)
      expect(queue.HEAD.value).to.equal(1)
      expect(queue.last.value).to.equal(2)
      expect(queue.HEAD.previousNode).to.equal(queue.last)
      expect(queue.last.previousNode).to.be.null
    })

  })

  describe('dequeue function', function () {
    it('should return null for an empty queue', function () {
      let queue = new Queue()
      expect(queue.dequeue()).to.be.null
    })

    it('should return an expected value for an existing queue', function() {
      let queue = new Queue()
      queue.enqueue(1)
      expect(queue.dequeue()).to.equal(1)
    })

    it('should appropriately reset the queue when dequeue-ing', function() {
      let queue = new Queue()
      queue.enqueue(1)
      queue.enqueue(2)
      queue.enqueue(3)
      queue.dequeue()
      expect(queue.HEAD.value).to.equal(2)
      expect(queue.last.value).to.equal(3)
    })

    it('should appropriately reset the queue when dequeue-ing last value', function() {
      let queue = new Queue()
      queue.enqueue(1)
      queue.dequeue()
      expect(queue.HEAD).to.be.null
      expect(queue.last).to.be.null
    })
  })
})
