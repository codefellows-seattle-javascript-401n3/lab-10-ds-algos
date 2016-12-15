'use strict'

const expect = require('chai').expect

const Stack = require('../stack')

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
      let stack = new Stack(1)
      stack.push(1)
      expect(stack.push(2)).to.throw(Error)
    })

    it('should should appropriately attach a new node to an existing stack with nodes', function() {
      let stack = new Stack()
      stack.push(1)
      stack.push(2)
      expect(stack.HEAD.previousNode.value).to.equal(2)
      expect(stack.size).to.equal(2)
      expect(stack.HEAD.previousNode.previousNode).to.be.null
    })
  })

  describe('pop function', function () {
    it('', function () {
      expect()
    })
  })

  describe('peek function', function () {
    it('', function () {
      expect()
    })
  })
})
