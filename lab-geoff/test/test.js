'use strict';

let Stack = require('../lib/stack.js');
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
    it('should not allow the stack to exceed maxSize', function() {
      let st = new Stack(2);
      st.push(2);
      st.push(3);
      expect(() => { st.push(4); }).to.throw(Error);
    });
  });
  describe('.pop() function', function() {
    it('should return the top value of the stack', function() {
      let st = new Stack();
      st.push(2);
      st.push(10);
      let top = st.top.val;
      let val = st.pop();
      expect(val).to.equal(top);
    });
    it('should throw an error when an empty stack calls pop', function() {
      let st = new Stack();
      expect(() => { st.pop(); }).to.throw(Error);
    });
    it('the size of the stack should decrease by one', function() {
      let st = new Stack();
      st.push(1);
      st.push(2);
      st.push(3);
      let size = st.size;
      st.pop();
      expect(st.size).to.equal(size -1);
    });
  });
  describe('.peek()', function() {
    it('should return the value of the top node', function() {
      let st = new Stack();
      st.push(1);
      st.push(10);
      st.push(9);
      let val = 2;
      st.push(val);
      let peek = st.peek();
      expect(peek).to.equal(val);
    });
    it('should not decrease the size of the stack', function() {
      let st = new Stack();
      st.push(5);
      let size = st.size;
      st.peek();
      expect(st.size).to.equal(size);
    });
    it('should throw an error on an empty stack', function() {
      let st = new Stack();
      expect(() => st.peek()).to.throw(Error);
    });
  });
});