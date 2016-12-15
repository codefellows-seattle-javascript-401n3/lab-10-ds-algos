'use strict'

let Node = require('../lib/node')
const expect = require('chai').expect

describe('node module', function() {
  it('creates a new Node object', function() {
    let node = new Node('test')
    expect(typeof node).to.equal('object')
  })
  it('creates a node with a value', function() {
    let node = new Node('test')
    expect(node.val).to.equal('test')
  })
  it('has a prev value initalized to null', function() {
    let node = new Node('test')
    expect(node.prev).to.equal(null)
  })
})
