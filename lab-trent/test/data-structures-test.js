'use strict';

const expect = require('chai').expect;
const Stack = require('../lib/stack');
const Queue = require('../lib/queue');

describe('Data Structures', function() {
  describe('Stack', function() {
    describe('#push()', function() {
      it('should throw an error when a stack is overflowed', function() {
        let s = new Stack(1);
        s.push(50);
        expect(s.push.bind(s, 20)).to.throw('Stack overflow.');
      });
      it('should push a new integer onto the stack', function() {
        let s = new Stack();
        s.push(50);
        expect(s.length).to.equal(1);
        expect(s.curr.value).to.equal(50);
        s.push(20);
        expect(s.length).to.equal(2);
        expect(s.curr.value).to.equal(20);
      });
      it('should push a new string onto the stack', function() {
        let s = new Stack();
        s.push('yo test');
        expect(s.length).to.equal(1);
        expect(s.curr.value).to.equal('yo test');
        s.push('yo test2');
        expect(s.length).to.equal(2);
        expect(s.curr.value).to.equal('yo test2');
      });
    });
    describe('#pop()', function() {
      it('should throw an error when a stack is underflowed', function() {
        let s = new Stack();
        expect(s.pop.bind(s)).to.throw('Stack underflow.');
      });
      it('should pop the integer from the head of the stack', function() {
        let s = new Stack([5, 2, 6, 10]);
        expect(s.pop()).to.equal(10);
        expect(s.pop()).to.equal(6);
        expect(s.pop()).to.equal(2);
        expect(s.pop()).to.equal(5);
      });
      it('should pop the string from the head of the stack', function() {
        let s = new Stack(['cats', 'are', 'mean']);
        expect(s.pop()).to.equal('mean');
        expect(s.pop()).to.equal('are');
        expect(s.pop()).to.equal('cats');
      });
    });
    describe('#peek()', function() {
      it('should return null when a stack is empty', function() {
        let s = new Stack();
        expect(s.peek()).to.equal(null);
      });
      it('should return the integer from the head of the stack', function() {
        let s = new Stack([5, 2, 6, 10]);
        expect(s.peek()).to.equal(10);
      });
      it('should return the string from the head of the stack', function() {
        let s = new Stack(['cats', 'are', 'mean']);
        expect(s.peek()).to.equal('mean');
      });
    });
  });

  describe('Queue', function() {
    describe('#enqueue()', function() {
      it('should add a value to the queue', function() {
        let q = new Queue();
        q.enqueue(2);
        expect(q.head.value).to.equal(2);
        expect(q.length).to.equal(1);
      });
      it('should add values to the queue and adjust tail and head accordingly', function() {
        let q = new Queue();
        q.enqueue(2);
        q.enqueue(5);
        q.enqueue(10);
        expect(q.head.value).to.equal(2);
        expect(q.tail.value).to.equal(10);
        expect(q.length).to.equal(3);
      });
    });
    describe('#dequeue()', function() {
      it('should return and remove the value from the head of the queue', function() {
        let q = new Queue([2, 3, 6, 12]);
        expect(q.dequeue()).to.equal(2);
      });
    });
  });
});
