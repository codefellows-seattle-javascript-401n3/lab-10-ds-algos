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
  })
})
