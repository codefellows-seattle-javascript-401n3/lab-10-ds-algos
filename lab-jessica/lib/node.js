'use strict';

const Node = function(val, prev) {
  if (!val) throw new Error('val expected');
  if (isNaN(val)) throw new Error('val expected to be a number');
  this.val = val;
  this.prev = prev || null;
};

module.exports = Node;
