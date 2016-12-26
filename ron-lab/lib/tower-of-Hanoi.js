'use strict'

const Stack = require('./stacks/stack.js')

let a = new Stack()
let b = new Stack()
let c = new Stack()

function createTower(n) {
  for( var i = n; i > 0; i--) {
    a.push(i)
  }
}

createTower()


function ab() {
  if(!b.top) {
    b.push(a.pop())
  } else if(!a.top) {
    a.push(b.pop())
  } else if(a.top.val < b.top.val) {
    b.push(a.pop())
  }
}

function ac() {
  if(!c.top) {
    c.push(a.pop())
  } else if(!a.top) {
    a.push(c.pop())
  } else if(a.top.val < c.top.val) {
    c.push(a.pop())
  }
}

function bc() {
  if(!c.top) {
    c.push(b.pop())
  } else if(!b.top) {
    b.push(c.pop())
  } else if(b.top.val < c.top.val) {
    b.push(c.pop())
  }
}
