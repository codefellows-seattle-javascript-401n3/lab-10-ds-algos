let Node = function(val, prev){
  //if(isNaN(val)) return new Error('Values must be numbers');
  this.val = val;
  this.prev = prev || null;
};

module.exports = Node;
