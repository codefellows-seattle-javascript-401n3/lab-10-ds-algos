let assert = require('chai').expect;
let Stack = require('../lib/stack.js');

describe('stack module', function(){
  describe('.push()', function(){
    it('should add a new node to the top of the stack', function(){
      let st = new Stack();
      st.push(25);
      assert(st.top.val).to.equal(25);
      assert(st.top.prev).to.equal(null);
    });
    it('should throw error when max size is exceeded', function(){
      let st = new Stack(1);
      let err = new ReferenceError('You overflowed your stack.');
      let fn = function(){throw err;};
      st.push(25);
      assert(fn).to.throw(err);
      // assert(st.push(24)).to.equal('you overflowed your stack');
    });
    it('should only accept nodes that are numbers', function(){
      let st = new Stack();
      let err = new ReferenceError('Values must be numbers');
      let fn = function(){throw err;};
      st.push('hello world');
      assert(fn).to.throw(err);
    });
  });


  describe('.pop()', function(){
    it('should remove the top node from the stack', function(){
      let st = new Stack(3);
      st.push(1);
      st.push(2);
      st.push(3);
      st.pop();
      assert(st.size).to.equal(2);
    });
    it('should return an error if there is nothing to pop', function(){
      let st = new Stack(5);
      st.push(1);
      let err = new ReferenceError('There is nothing in the stack to pop.');
      let fn = function(){throw err;};
      st.pop();
      assert(fn).to.throw(err);
    });
    it('should reassign this.top', function(){
      let st = new Stack(4);
      st.push(1);
      st.push(2);
      st.push(3);
      st.pop();
      assert(st.top.val).to.equal(2);
    });
  });


  describe('.peek()', function(){
    it('should return the value of the top item', function(){
      let st = new Stack(1);
      st.push(42);
      st.peek();
      assert(st.top.val).to.equal(42);
    });
    it('should return null if there is nothing to peek', function(){
      let st = new Stack(5);
      st.push(666);
      let err = new ReferenceError('There is nothing in the stack to peek.');
      let fn = function(){throw err;};
      st.peek();
      assert(fn).to.throw(err);
    });
    it('should not change the stack size ', function(){
      let st = new Stack(3);
      st.push(222);
      st.push('bloody_hell');
      st.peek();
      assert(st.size).to.equal(2);
    });
  });
});
