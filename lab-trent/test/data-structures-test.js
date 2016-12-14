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
  });
});
