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

    it('should have top value of 1 and others null', function() {
      const stacks = [new Stack(), new Stack(), new Stack()];
      hanoi.setupTower(6, stacks);
      expect(stacks[0].top.val).to.equal(1);
      expect(stacks[1].top).to.equal(null);
      expect(stacks[2].top).to.equal(null);
    });
  });
});
