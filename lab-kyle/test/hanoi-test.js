'use strict'

let hanoi = require('../lib/hanoi')
const Stack = require('../lib/stack')
const expect = require('chai').expect
const assert = require('chai').assert

describe('hanoi module', function() {

  before(function(done) {
    let a = new Stack()
    let b = new Stack()
    let c = new Stack()
    done()
  })

  describe('hanoi()', function() {
    it('will not accept strings', function() {
      expect(hanoi('3')).to.equal(Error)
    })
    it('will accept numbers', function() {
      let result = hanoi(3)
      console.log(result)
      expect(typeof(result)).to.equal(Array)
    })
  })
})
