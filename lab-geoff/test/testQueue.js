'use strict';

let expect = require('chai').expect;
let Queue = require('../lib/queue.js');

describe('queue module', function() {
  describe('.enqueue()', function() {
    it('will add a new node to the front of the queue', function() {
      let queue = new Queue();
      let val = 1;
      queue.enqueue(val);
      expect(queue.front).to.equal(val);
    });
  });
  describe('.dequeue()', function() {

  });
});