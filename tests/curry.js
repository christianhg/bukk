import test from 'ava'

import curry from '../src/curry'
import kind from '../src/kind'

const add = (a, b) => a + b
const addCurried = curry(add)

test('should accept arguments all at once', t => {
  t.is(addCurried(1, 1), 2)
})

test('should accept arguments one by one', t => {
  t.is(addCurried(1)(1), 2)
})

test('should return a function when insufficient arguments are applied', t => {
  t.is(kind(addCurried(1)), 'Function')
})

test('should ignore extra arguments', t => {
  t.is(addCurried(1)(1, 1), 2)
})
