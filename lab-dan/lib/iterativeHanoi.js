'use strict'

const iterativeHanoi = module.exports = function(Stack, n) {
  let stack1 = new Stack()
  let stack2 = new Stack()
  let stack3 = new Stack()

  for(let i = n; i > 0; i--) {
    stack1.push(i)
  }
  print(stack1, stack2, stack3, n, 'Initial Tower Built')
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
    console.log(`${values.one ? values.one.value : null}    ${values.two ? values.two.value : null}   ${values.three ? values.three.value : null}`)
    values.one = values.one ? values.one.previousNode : null
    values.two = values.two ? values.two.previousNode : null
    values.three = values.three ? values.three.previousNode : null
  }
  console.log('\n')
}
