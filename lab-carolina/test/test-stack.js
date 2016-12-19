'use strict';

const expect = require('chai').expect;
const Stack = require('../lib/stack.js');


describe('stack module', function(){
  describe('.push()', function(){
    it('should add a new node to the top of the stack', function(){
      var st = new Stack();
      st.push(25);
      expect(st.top.val).to.equal(25);
      expect(st.top.prev).to.equal(null);
    });
    it('should throw error when max size exceeded', function(){
      var st = new Stack(1);
      st.push(25);
      expect(st.top.val).to.equal(25);
      expect(st.push(24)).to.equal(Error);
    });
    it('should increase the count', function(){
      var st = new Stack();
      st.push(1);
      expect(st.size).to.equal(1);
    });
  });


  describe('.pop()', function(){
    it('should pop a node off the stack', function(){
      var st = new Stack();
      st.push(12);
      st.pop();
      expect(st.top).to.equal(null);
    });
    it('should throw an error if there is no top value', function(){
      var st = new Stack();
      expect(st.top).to.equal(null);
    });
    it('should return the value of the removed node', function(){
      var st = new Stack();
      st.push(1);
      st.push(2);
      expect(st.pop()).to.equal(2);
    });
  });

  describe('.peek()', function(){
    it('should return the top node', function(){
      var st = new Stack();
      st.push(10);
      st.push(22);
      expect(st.peek()).to.equal(22);
    });
    it('should return null for an empty stack', function(){
      var st = new Stack();
      expect(st.peek()).to.equal(null);
    });
    it('should not change the stack size', function(){
      var st = new Stack();
      st.peek();
      expect(st.size).to.equal(0);
    });
  });
});
