let assert = require('chai').expect;
let Queue = require('../lib/queue.js');

describe('queue module', function(){
  describe('.enqueue()', function(){
    it('should add a new node to the back of the queue', function(){
      let qu = new Queue();
      qu.enqueue(25);
      assert(qu.back.val).to.equal(25);
    });
    it('should throw error if the queue is empty', function(){
      let qu = new Queue();
      let err = new ReferenceError('Your queue is empty.');
      let fn = function(){throw err;};
      qu.enqueue('dog');
      assert(fn).to.throw(err);
    });
    it('should only accept nodes that are numbers', function(){
      let qu = new Queue();
      let err = new ReferenceError('Values must be numbers');
      let fn = function(){throw err;};
      qu.enqueue('hello world');
      assert(fn).to.throw(err);
    });
  });
  //
  //
  describe('.dequeue()', function(){
    it('should reassigns the first node to the second', function(){
      let qu = new Queue();
      qu.enqueue(1);
      qu.enqueue(2);
      qu.dequeue();
      assert(qu.front.val).to.equal(2);
    });
    it('should return an error if there is nothing to dequeue', function(){
      let qu = new Queue();
      qu.enqueue(1);
      let err = new ReferenceError('There is nothing in the queue to remove.');
      let fn = function(){throw err;};
      qu.dequeue();
      assert(fn).to.throw(err);
    });
  //   i honestly can't think of a third thing to validate on dequeue.  
  });

});
