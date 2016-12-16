'use strict';

const expect = require('chai').expect;
const Stack = require('../lib/stack.js');

describe('stack module', function() {
  describe('.push()', function() {
    it('should add a new node to the top of the stack', function() {
      let st = new Stack();
      st.push('hello');
      expect(st.top.val).to.equal('hello');
      // expect(st.size).to.equal(2);
      expect(st.top.prev).to.equal(null);
      console.log(st);
    });
    it('should throw and error if maxsize exceeded.', function() {
      let st = new Stack(1);
      // let err = new ReferenceError('Max size exceeded');
      st.push('hello');
      expect(st.push('goodbye')).to.equal(Error);
      // let fn = function() {st.push(2);};
      // expect(fn).to.throw(ReferenceError);
      // console.log(st);
      // // console.log(err);
    });
    it('should only take in string values', function() {
      let st = new Stack();
      // let err = new ReferenceError('Must be an integer');
      // let fn = function() {throw err;};
      st.push('This ain\'t an integer');
      expect(typeof(st.top.val, 'string'));
      expect(st.push(15)).to.equal(Error, 'not a string');
      console.log(st);
    });
  });
  describe('.pop()', function() {

  });
});