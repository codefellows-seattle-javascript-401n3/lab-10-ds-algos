'use strict';

const expect = require('chai').expect;
const Queue = require('../lib/queue.js');

describe('testing the enqueue module', function(){
  describe('.enqueue()', function(){
    it('should create a new node', function(){
      var q = new Queue();
      q.enqueue(1);
      q.enqueue(2);
      expect(q.back.val).to.equal(2);
    });
    it('should return null if there is no nodes in the queue', function(){
      var q = new Queue();
      expect(q.front).to.equal(null);
    });
    it('should assign the new node as it\s front node prev value', function(){
      var q = new Queue();
      q.enqueue(1);
      q.enqueue(2);
      expect(q.front.prev.val).to.equal(2);
    });
  });

  describe('testing the dequeue module', function(){
    it('should remove the first node in the queue', function(){
      var q = new Queue();
      q.enqueue(1);
      q.enqueue(2);
      q.dequeue();
      expect(q.front.val).to.equal(2);
    });
    it('should return null if the stack is now empty', function(){
      var q = new Queue();
      q.enqueue(1);
      q.dequeue();
      expect(q.front).to.equal(null);
    });
    it('should return removed node', function(){
      var q = new Queue();
      q.enqueue(1);
      q.enqueue(2);
      expect(q.dequeue()).to.equal(1);
    });
  });
});
//
