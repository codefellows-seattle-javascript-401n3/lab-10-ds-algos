'use strict';

let expect = require('chai').expect;
let Queue = require('../lib/queue.js');

describe('queue model', function() {
  describe('.enqueue()', function() {
    it('should throw error if there is nothing in queue', function() {
      let q = new Queue();
      let err = new ReferenceError('Nothing in queue');
      let fn = function(){throw err;};
      q.enqueue(null);
      console.log(q);
      expect(fn).to.throw(err);
    });
    it('should add an incoming connection to the end of queue', function(){
      let q = new Queue();
      q.enqueue(25);
      console.log(q);
      expect(q.back.val).to.equal(25);
      // expect(q.front.prev).to.equal(null);
      // console.log(q.back.val);

    });
    it('should only take in integer values', function() {
      let q = new Queue();
      let err = new ReferenceError('Must be an integer');
      let fn = function() {throw err;};
      // q.enqueue('This ain\'t an integer');
      q.enqueue(5);
      expect(fn).to.throw(err);
      console.log(q);
    });
  });
});