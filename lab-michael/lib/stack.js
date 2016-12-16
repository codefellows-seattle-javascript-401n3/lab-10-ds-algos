const Node = require('./node.js');

const Stack = module.exports = function(maxSize) {
  this.top = null;
  this.maxSize = maxSize || null;
  this.size = 0;

};

Stack.prototype.push = function(val) {
  // let err = new Error('Must be an integer');
  // let fn = function() {throw err;};
  if (((typeof val)) === 'string') {
    if(this.size < this.maxSize || this.maxSize === null) {
      this.top = new Node(val, this.top);
      this.size += 1;
      // st.push('This ain\'t an integer');
      // expect(fn).to.throw(err);
      // console.log(st);
      return;

    }
  }
  return Error;
  // a new node should be created with val and prev node
  // no return value here
};

Stack.prototype.pop = function() {
  if(!this.top) throw new Error('error');
  if(this.top) {
    let curr = this.top;
    this.top = curr.prev;
    this.size -=1;
    return curr;

  }
  return null;
  // remove the node assigned to the top of the Stack
  // assign previous node to the top
  // return the value of node removed
};

Stack.prototype.peek = function() {
  return this.top.val;
  // Return the value of the top node
};