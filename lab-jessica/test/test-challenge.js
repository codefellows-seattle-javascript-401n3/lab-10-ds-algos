'use strict';

const hanoi = require('../lib/challenge.js');
const Stack = require('../lib/stack.js');
const expect = require('chai').expect;

describe('Challenge Module', function() {
  describe('.setupTower()', function() {
    it('should put 6 disks on one stack and leave others empty', function() {
      const stacks = [new Stack(), new Stack(), new Stack()];
      hanoi.setupTower(6, stacks);
      expect(stacks[0].size).to.equal(6);
      expect(stacks[1].size).to.equal(0);
      expect(stacks[2].size).to.equal(0);
    });

    it('should fill stack with numbers in correct order, other stacks should have top equal to null', function() {
      const stacks = [new Stack(), new Stack(), new Stack()];
      hanoi.setupTower(6, stacks);
      expect(stacks[0].top.val).to.equal(1);
      expect(stacks[0].top.prev.val).to.equal(2);
      expect(stacks[0].top.prev.prev.val).to.equal(3);
      expect(stacks[0].top.prev.prev.prev.val).to.equal(4);
      expect(stacks[0].top.prev.prev.prev.prev.val).to.equal(5);
      expect(stacks[0].top.prev.prev.prev.prev.prev.val).to.equal(6);
      expect(stacks[1].top).to.equal(null);
      expect(stacks[2].top).to.equal(null);
    });
  });

  describe('.moveSmallestDisk()', function(){
    it('should return current position of smallest disk', function() {
      const stacks = [new Stack(), new Stack(), new Stack()];
      stacks[0].push(1);
      expect(hanoi.moveSmallestDisk(stacks)).to.equal(1);
    });
  });
});
