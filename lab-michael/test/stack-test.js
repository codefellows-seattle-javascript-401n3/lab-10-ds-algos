'use strict';

const expect = require('chai').expect;
const Stack = require('../lib/stack.js');

describe('stack module', function() {
  describe('.push()', function() {
    it('should add a new node to the top of the stack', function() {
      let st = new Stack();
      st.push(1);
      expect(st.top.val).to.equal(1);
      expect(st.size).to.equal(1);
      expect(st.top.prev).to.equal(null);
      console.log(st);
    });
    it('should throw and error if maxsize exceeded.', function() {
      let st = new Stack(null, 1);
      let err = new ReferenceError('Max size exceeded');
      st.push(1);
      let fn = function() {
        st.push(2);};
      expect(fn).to.throw(err);
      console.log(st);
      // console.log(err);
    });
    it('should only take in integer values', function() {
      let st = new Stack();
      let err = new ReferenceError('Must be an integer');
      let fn = function() {throw err;};
      st.push('This ain\'t an integer');
      expect(fn).to.throw(err);
      console.log(st);
    });
  });
  describe('.pop()', function() {

  });
});