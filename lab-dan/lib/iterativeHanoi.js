'use strict'

const iterativeHanoi = module.exports = function(Stack, n) {
  let stack1 = new Stack()
  let stack2 = new Stack()
  let stack3 = new Stack()

  for(let i = n; i > 0; i--) {
    stack1.push(i)
  }
  print(stack1, stack2, stack3, n, 'Initial Tower Built')

  if(n % 2 === 0) {
    solveEvenHanoi(stack1, stack2, stack3, n)
  } else {
    solveOddHanoi(stack1, stack2, stack3, n)
  }

}

function print(stack1, stack2, stack3, n, status='') {
  let values = {
    one: stack1.HEAD,
    two: stack2.HEAD,
    three: stack3.HEAD,
  }
  console.log('\n')
  console.log(status)
  for (let i = n; i > 0; i--) {
    console.log(`${values.one ? values.one.value : 0}    ${values.two ? values.two.value : 0}    ${values.three ? values.three.value : 0}`)
    values.one = values.one ? values.one.previousNode : 0
    values.two = values.two ? values.two.previousNode : 0
    values.three = values.three ? values.three.previousNode : 0
  }
  console.log('\n')
}

function solveEvenHanoi(stack1, stack2, stack3, n) {
  let moves = 0
  while(!isSolved(stack1, stack2, stack3, n, moves)) {
    // make the legal move between pegs A and B (in either direction)
    if (isLegalMove(stack1, stack2)) {
      stack2.push(stack1.pop())
    } else {
      stack1.push(stack2.pop())
    }
    moves++

    if(isSolved(stack1, stack2, stack3, n, moves)) {
      break
    }

    // make the legal move between pegs A and C (in either direction)
    if (isLegalMove(stack1, stack3)) {
      stack3.push(stack1.pop())
    } else {
      stack1.push(stack3.pop())
    }
    moves++

    if(isSolved(stack1, stack2, stack3, n, moves)) {
      break
    }
    // make the legal move between pegs B and C (in either direction)
    if (isLegalMove(stack2, stack3)) {
      stack3.push(stack2.pop())
    } else {
      stack2.push(stack3.pop())
    }
    moves++
  }
  return
}

function solveOddHanoi(stack1, stack2, stack3, n) {
  let moves = 0
  while(!isSolved(stack1, stack2, stack3, n, moves)) {
    // make the legal move between pegs A and C (in either direction)
    if(isLegalMove(stack1, stack3)) {
      stack3.push(stack1.pop())
    } else if (isLegalMove(stack3, stack1)) {
      stack1.push(stack3.pop())
    }
    moves++

    if (isSolved(stack1, stack2, stack3, n, moves)) {
      break
    }

    // make the legal move between pegs A and B (in either direction)
    if(isLegalMove(stack1, stack2)) {
      stack2.push(stack1.pop())
    } else {
      stack1.push(stack2.pop())
    }
    moves ++

    if (isSolved(stack1, stack2, stack3, n, moves)) {
      break
    }

    // make the legal move between pegs C and B (in either direction)
    if(isLegalMove(stack3, stack2)) {
      stack2.push(stack3.pop())
    } else {
      stack3.push(stack2.pop())
    }
    moves++
  }
  return
}

function isLegalMove(firstStack, secondStack) {
  if (firstStack.HEAD !== null && secondStack.HEAD === null) {
    return true
  }

  if (firstStack.HEAD !== null && secondStack.HEAD !== null) {
    if (firstStack.HEAD.value < secondStack.HEAD.value) {
      return true
    }
  }

  return false
}

function isSolved(stack1, stack2, stack3, n, moves) {
  if (stack3.size === n) {
    print(stack1, stack2, stack3, n, `Towers of Hanoi solved in ${moves} moves`)
    return true
  }
  return false
}
