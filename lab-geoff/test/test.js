'use strict';

let Stack = require('../lib/stack.js');
let assert = require('assert');
let expect = require('chai').expect;

describe('stack module', function() {
  describe('.pop()function', function() {
    it('should return a value', function() {
      let st = new Stack(5);
      assert(st.pop()).to.be.ok;
    });
  });
});