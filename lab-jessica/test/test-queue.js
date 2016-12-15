'use strict';

const Queue = require('../lib/queue.js');
const expect = require('chai').expect;

describe('Queue module', function() {
  describe('.enqueue()', function() {
    it('should add a new node to the back of the stack', function() {
      const q = new Queue();
      q.enqueue(25);
      q.enqueue(40);
      expect(q.back.val).to.equal(40);
    });

    it('back and front should be equal if queue is empty', function() {
      const q = new Queue();
      q.enqueue(1);
      expect(q.back.val).to.equal(q.front.val);
    });

    it('front should not change', function() {
      const q = new Queue();
      q.enqueue(1);
      q.enqueue(2);
      expect(q.front.val).to.equal(1);
    });
  });

  describe('.dequeue()', function() {
    it('should return null if queue is empty', function() {
      const q = new Queue();
      expect(q.dequeue()).to.equal(null);
    });

    it('should return the val removed if not empty', function() {
      const q = new Queue();
      q.enqueue(1);
      expect(q.dequeue()).to.equal(1);
    });

    it('should reassign front of queue to current this.front.prev', function() {
      const q = new Queue();
      q.enqueue(1);
      q.enqueue(2);
      q.dequeue();
      expect(q.front.val).to.equal(2);
    });

    it('should assign null to front and back if one item in queue', function() {
      const q = new Queue();
      q.enqueue(1);
      q.dequeue();
      expect(q.front).to.equal(null);
      expect(q.back).to.equal(null);
    });
  });
});
