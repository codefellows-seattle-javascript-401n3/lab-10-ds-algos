'use strict'

const Stack = require('../lib/stack')
const expect = require('chai').expect
const assert = require('chai').assert

describe('stack module', function() {

  describe('.push', function() {
    it('should add a new node to the top of the stack', function() {
      let st = new Stack()
      st.push(1)
      expect(st.top.val).to.equal(1)
      expect(st.top.prev).to.equal(null)
    })
    it('should throw error when maxSize is exceeded', function() {
      let st = new Stack(1)
      st.push(1)
      expect(st.push(2)).to.equal(Error)
    })
    it('should allow only numbers to be added to the stack', function() {
      let st = new Stack()
      st.push(5)
      assert.typeOf(st.top.val, 'number')
      expect(st.push('15')).to.equal(Error)
    })
    it('should increase the size of the stack by one', function() {
      let st = new Stack()
      st.push(1)
      expect(st.size).to.equal(1)
      st.push(2)
      expect(st.size).to.equal(2)
    })
  })

  describe('.pop', function() {
    it('should return a node from the top of the stack', function() {
      let st = new Stack()
      st.push(1)
      st.push(2)
      expect(st.pop()).to.equal(2)
    })
    it('should return null if there is nothing on the stack', function() {
      let st = new Stack()
      expect(st.pop()).to.equal(null)
    })
    it('should reduce the size of the stack by one', function() {
      let st = new Stack()
      st.push(1)
      st.push(2)
      st.pop()
      expect(st.size).to.equal(1)
    })
  })

  describe('.peek', function() {
    it('should return the value of the top node in the stack', function() {
      let st = new Stack()
      st.push(1)
      st.push(2)
      expect(st.peek()).to.equal(2)
    })
    it('should return a number if there something in the stack', function() {
      let st = new Stack()
      st.push(17)
      assert.typeOf(st.top.val, 'number')
    })
    it('should return null if the stack is empty', function() {
      let st = new Stack()
      expect(st.top).to.equal(null)
    })
  })
})
