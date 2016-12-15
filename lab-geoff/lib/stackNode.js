'use strict';

let Node = module.exports = function(val, prev) {
  this.val = val;
  this.prev = prev || null; 
};