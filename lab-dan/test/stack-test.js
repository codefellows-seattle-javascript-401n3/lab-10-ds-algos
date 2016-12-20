'use strict'

const expect = require('chai').expect

const Stack = require('../lib/stack')

describe('stack module', function() {
  describe('push function', function() {
    it('should add a new node to the top of the null stack', function () {
      let stack = new Stack()
      stack.push(1)
      expect(stack.HEAD.value).to.equal(1)
      expect(stack.size).to.equal(1)
      expect(stack.HEAD.previousNode).to.be.null
    })

    it('should throw error when max size exceeded', function () {
      let stack = new Stack(null, 1)
      stack.push(1)
      expect(function() {
        stack.push(2)
      }).to.throw(RangeError)
    })

    it('should should appropriately attach a new node to an existing stack with nodes', function() {
      let stack = new Stack()
      stack.push(1)
      stack.push(2)
      expect(stack.HEAD.value).to.equal(2)
      expect(stack.HEAD.previousNode.value).to.equal(1)
      expect(stack.size).to.equal(2)
      expect(stack.HEAD.previousNode.previousNode).to.be.null
    })
  })

  describe('pop function', function () {
    it('should remove the top node of the stack', function () {
      let stack = new Stack()
      stack.push(1)
      expect(stack.pop()).to.equal(1)
    })

    it('should return null if the stack is empty', function() {
      let stack = new Stack()
      expect(stack.pop()).to.be.null
    })

    it('should appropriately set the stack after a pop', function() {
      let stack = new Stack()
      stack.push(1)
      stack.push(2)
      stack.pop()
      expect(stack.HEAD.value).to.equal(1)
      expect(stack.size).to.equal(1)
    })
  })

  describe('peek function', function () {
    it('should return the correct value', function () {
      let stack = new Stack()
      stack.push(1)
      expect(stack.peek()).to.equal(1)
    })

    it('should return null for an empty stack', function() {
      let stack = new Stack()
      expect(stack.peek()).to.be.null
    })
  })
})
