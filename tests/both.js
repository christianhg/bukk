import test from 'ava'

import divide from '../src/divide'
import both from '../src/both'
import multiply from '../src/multiply'
import type from '../src/type'

const even = (x) => x % 2 === 0
const gt5 = (x) => x > 5

test('should return the result of the second function if the result of the first is truthy', t => {
  t.is(both(even, gt5)(4), false)
  t.is(both(even, gt5)(42), true)
})

test('should return the result of the first function if it is not truthy', t => {
  t.is(both(even, gt5)(43), false)
  t.is(both(even, gt5)(8), true)
})

test('should accept multiple arguments', t => {
  t.is(both(multiply, divide)(4, 2), 2)
  t.is(both(multiply, divide)(0, 2), 0)
  t.is(both(multiply, divide)(0, 0), 0)
})

test('should be curried', t => {
  const isNumber = (a) => type(a) === 'number'
  const bothNumberAnd = both(isNumber)

  t.is(bothNumberAnd(gt5)(7), true)
  t.is(bothNumberAnd(gt5)('foo'), false)
})
