'use strict';

let Stack = require('../lib/stack.js');
// let assert = require('assert');
let expect = require('chai').expect;

describe('stack module', function() {
  describe('.push()function', function() {
    it('should add a new node to the stack', function() {
      let st = new Stack(5);
      st.push(2);
      expect(st.top.val).to.equal(2);
    });
  });
});