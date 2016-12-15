'use strict';

function move(p1, p2) {
  let p1Top = p1.peek();
  let p2Top = p2.peek();

  if (p1Top === null || (p1Top > p2Top && p2Top !== null)) {
    p1.push(p2.pop());
  } else if (p2Top === null || (p2Top > p1Top && p1Top !== null)) {
    p2.push(p1.pop());
  }
}

module.exports.solveHanoiIterative = function(start, mid, last) {
  let moves = Math.pow(2, start.length) - 1;
  if (start.length % 2 === 0) {
    let temp = mid;
    mid = last;
    last = temp;
  }
  for (let i = 1;i <= moves;i++) {
    if (i % 3 === 1) {
      move(start, last);
    } else if (i % 3 === 2) {
      move(start, mid);
    } else if (i % 3 === 0) {
      move(mid, last);
    }
  }
};
