'use strict';

const Stack = require('../lib/stack.js');
const expect = require('chai').expect;

describe('Stack module', function() {
  describe('.push()', function() {
    it('should add a new node to the top of the stack', function() {
      const st = new Stack();
      st.push(25);
      expect(st.top.val).to.equal(25);
      expect(st.top.prev).to.equal(null);
    });

    it('should throw error when max size is exceeded', function() {
      const st = new Stack(1);
      st.push(25);
      expect(st.push(24)).to.equal(Error);
    });

    it('should increase size of stack by 1', function() {
      const st = new Stack();
      st.push(1);
      expect(st.size).to.equal(1);
    });
  });

  describe('.pop()', function() {
    it('should return null if stack is empty', function() {
      const st = new Stack();
      expect(st.pop()).to.equal(null);
    });

    it('should return the val removed if stack not empty', function() {
      const st = new Stack();
      st.push(1);
      expect(st.pop()).to.equal(1);
    });

    it('should reduce the size of the stack by 1', function() {
      const st = new Stack();
      st.push(1);
      st.pop();
      expect(st.size).to.equal(0);
    });

    it('should reassign the front of the stack to current this.top.prev', function() {
      const st = new Stack();
      st.push(1);
      st.push(2);
      st.pop();
      expect(st.top.val).to.equal(1);
    });
  });

  describe('.peek()', function() {
    it('should return the top of the stack', function() {
      const st = new Stack();
      st.push(1);
      expect(st.peek()).to.equal(1);
    });

    it('stack size should not change', function() {
      const st = new Stack();
      st.peek();
      expect(st.size).to.equal(0);
    });

    it('should not reassign top of stack', function() {
      const st = new Stack();
      st.push(1);
      st.peek();
      expect(st.top.val).to.equal(1);
    });
  });
});
