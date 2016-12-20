'use strict'

const Stack = require('./stack')

let hanoi = module.exports = function(n) {
  let a = new Stack()
  let b = new Stack()
  let c = new Stack()

  let turns = 0

  initStackA(n)

  if (typeof n === 'number') {
    while (b.size < n && c.size < n) {
      if (n % 2 === 0) {
        ab()
        ac()
        bc()
      } else {
        ac()
        ab()
        bc()
      }
    }
    return [turns, [a, b, c]]
  }


  function initStackA(n) {
    while(n) {
      a.push(n)
      n --
    }
  }

  // function to handle moves between stack a and stack b
  function ab() {
    if (!b.top) {
      b.push(a.pop())
    } else if (!a.top) {
      a.push(b.pop())
    } else if (a.top.val < b.top.val) {
      b.push(a.pop())
    } else {
      a.push(b.pop())
    }
    turns ++
  }

  // function to handle moves between stack a and stack c
  function ac() {
    if (!c.top) {
      c.push(a.pop())
    } else if (!a.top) {
      a.push(c.pop())
    } else if (a.top.val < c.top.val) {
      c.push(a.pop())
    } else {
      a.push(c.pop())
    }
    turns ++
  }

  // function to handle moves between stack b and stack c
  function bc() {
    if (!c.top) {
      c.push(b.pop())
    } else if (!b.top) {
      b.push(c.pop())
    } else if (b.top.val < c.top.val) {
      c.push(b.pop())
    } else {
      b.push(c.pop())
    }
    turns ++
  }

  return Error
}
