'use strict'

const Queue = require('./lib/queue')
const Stack = require('./lib/stack')

const options = {
  '-q': Queue,
  '-s': Stack,
}

function start() {
  if (!options.hasOwnProperty(process.argv[2])) {
    throw new Error('improper argument or missing require flag. Please use "-q" or "-s".')
  }
  let choice = options[process.argv[2]]
  let array = process.argv[3] ? process.argv[3].split(',').map(char => +char) : null
  let maxSize = process.argv[4] ? +process.argv[4] : null
  let dataStructure = new choice(array, maxSize)
  console.log(dataStructure)
  return dataStructure
}

start()
