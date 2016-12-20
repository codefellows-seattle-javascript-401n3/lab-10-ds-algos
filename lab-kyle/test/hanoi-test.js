'use strict'

let hanoi = require('../lib/hanoi')
const expect = require('chai').expect

describe('hanoi module', function() {
  describe('hanoi()', function() {
    it('will not accept strings', function() {
      expect(hanoi('3')).to.equal(Error)
    })
    it('will accept numbers', function() {
      let result = hanoi(3)
      expect(typeof result[0]).to.equal(typeof 0)
    })
    it('will return an array with two values', function() {
      let result = hanoi(3)
      expect(result.length).to.equal(2)
    })
    it('will return the number of moves it took to solve the puzzle', function() {
      let result = hanoi(6)
      expect(result[0]).to.equal(63)
    })
    it('will move the discs off of tower A', function() {
      let result = hanoi(3)
      expect(result[1][0].size).to.equal(0)
    })
    it('will result in the top disc of tower b or tower c to have a value of 1', function() {
      let result = hanoi(12)
      if(result[1][1].size) {
        expect(result[1][1].top.val).to.equal(1)
      } else {
        expect(result[1][2].top.val).to.equal(1)
      }
    })
  })
})
