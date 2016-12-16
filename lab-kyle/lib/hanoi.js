'use strict'

const Node = require('./node')
const Stack = require('./stack')

// create 3 towers
let a = new Stack()
let b = new Stack()
let c = new Stack(); // had to add a semi colon to remove linter bug error

// intialize 6 discs (nodes) to tower a
[6, 5, 4, 3, 2, 1].forEach(ele => {
  a.push(ele)
})
// 2^n-1
console.log(a);
