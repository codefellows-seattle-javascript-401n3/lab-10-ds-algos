'use strict';

let expect = require('chai').expect;
let Queue = require('../lib/queue.js');

describe('queue module', function() {
  describe('.enqueue()', function() {
    it('will add a new node to the back of the queue', function() {
      let queue = new Queue();
      let val = 1;
      queue.enqueue(val);
      expect(queue.back.val).to.equal(val);
    });
    it('will assign the new node as the previous node to the current back', function() {
      let queue = new Queue();
      queue.enqueue(1);
      queue.enqueue(2);
      expect(queue.front.prev).to.equal(queue.back);
    });
    it('will assign a front and back to an empty node', function() {
      let queue = new Queue();
      queue.enqueue(2);
      expect(this.front).to.equal(this.back);
    });
  });
  describe('.dequeue()', function() {
    it('will return null on an empty queue', function() {
      let queue = new Queue();
      let val = queue.dequeue();
      expect(val).to.equal(null);
    });
    it('should return the value of the node at the front of queue', function() {
      let queue = new Queue();
      queue.enqueue(10);
      let frontVal = queue.front.val;
      queue.enqueue(9);
      queue.enqueue(8);
      let val = queue.dequeue();
      expect(val).to.equal(frontVal);
    });
    it('', function() {

    });
  });
});