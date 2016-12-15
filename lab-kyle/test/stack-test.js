'use strict'

const Stack = require('../lib/stack')
const expect = require('chai').expect
const assert = require('chai').assert

describe('stack module', function() {

  describe('.push', function() {
    it('should add a new node to the top of the stack', function() {
      let st = new Stack()
      st.push('hello')
      expect(st.top.val).to.equal('hello')
      expect(st.top.prev).to.equal(null)
    })
    it('should throw error when maxSize is exceeded', function() {
      let st = new Stack('hello')
      st.push('hello')
      expect(st.push('world')).to.equal(Error)
    })
    it('should allow only strings to be added to the stack', function() {
      let st = new Stack()
      st.push('pass')
      assert.typeOf(st.top.val, 'string')
      expect(st.push(15)).to.equal(Error)
    })
    it('should increase the size of the stack by one', function() {
      let st = new Stack()
      st.push('first')
      expect(st.size).to.equal(1)
      st.push('second')
      expect(st.size).to.equal(2)
    })
  })

  describe('.pop', function() {
    it('should return a node from the top of the stack', function() {
      let st = new Stack()
      st.push('test')
      st.push('test 2: Electric Boogaloo')
      expect(st.pop()).to.equal('test 2: Electric Boogaloo')
    })
    it('should return null if there is nothing on the stack', function() {
      let st = new Stack()
      expect(st.pop()).to.equal(null)
    })
    it('should reduce the size of the stack by one', function() {
      let st = new Stack()
      st.push('first')
      st.push('second')
      st.pop()
      expect(st.size).to.equal(1)
    })
  })

  describe('.peek', function() {
    it('should return the value of the top node in the stack', function() {
      let st = new Stack()
      st.push('hello')
      st.push('world')
      expect(st.peek()).to.equal('world')
    })
    it('should return a string if there something in the stack', function() {
      let st = new Stack()
      st.push('test')
      assert.typeOf(st.top.val, 'string')
    })
    it('should return null if the stack is empty', function() {
      let st = new Stack()
      expect(st.top).to.equal(null)
    })
  })
})
