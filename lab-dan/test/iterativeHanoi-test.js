'use strict'

const expect = require('chai').expect
const Stack = require('../lib/stack')
const iterativeHanoi = require('../lib/iterativeHanoi')

describe('Iterative Hanoi solution', function () {
  describe('Hanoi solver function', function () {
    it('should properly solve an even numbered solution', function () {
      let n = 4
      let stacks = iterativeHanoi(Stack, n)
      expect(stacks.stack1.size).to.be.equal(0)
      expect(stacks.stack2.size).to.be.equal(0)
      expect(stacks.stack3.size).to.be.equal(n)
      expect(checkStack(stacks.stack3, n)).to.be.true
    })
    it('should properly solve an odd numbered solution', function () {
      let n = 3
      let stacks = iterativeHanoi(Stack, n)
      expect(stacks.stack1.size).to.be.equal(0)
      expect(stacks.stack2.size).to.be.equal(0)
      expect(stacks.stack3.size).to.be.equal(n)
      expect(checkStack(stacks.stack3, n)).to.be.true
      expect(stacks.moves).to.equal(Math.pow(2, n) - 1)
    })
    it('should return 0 for a 0 sized', function () {
      let n = 0
      let stacks = iterativeHanoi(Stack, n)
      expect(stacks.stack1.size).to.be.equal(0)
      expect(stacks.stack2.size).to.be.equal(0)
      expect(stacks.stack3.size).to.be.equal(n)
      expect(checkStack(stacks.stack3, n)).to.be.true
      expect(stacks.moves).to.equal(Math.pow(2, n) - 1)
    })
    it('should throw an error if not passed an integer', function() {
      expect(function(){
        let n = 'test'
        iterativeHanoi(Stack, n)
      }).to.throw.error

    })
  })
})


function checkStack(stack, n) {
  if(n === 0) {
    if (stack.HEAD === null && stack.size === 0) {
      return true
    }
  }
  if (stack.size === n) {
    let node = stack.HEAD
    for(let i = 0; i < n; i++) {
      if(i === n - 1) {
        return node.previousNode === null
      } else if (node.value < node.previousNode.value) {
        node = node.previousNode
      }
    }
  }
  return false
}
