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
    it('should increase in size when a new node is added', function() {
      let st = new Stack(5);
      let size = st.size;
      st.push(5);
      expect(st.size).to.equal(size += 1);
    });
  });
});