import test from 'ava'

import kind from '../src/kind'
import multiply from '../src/multiply'

test('should be curried', t => {
  const double = multiply(2)
  const triple = multiply(3)

  t.is(kind(double), 'Function')
  t.is(double(2), 4)
  t.is(triple(2), 6)
})

test('should operate on Numbers', t => {
  t.is(multiply(1, 1), 1)
  t.is(multiply(2, 1), 2)
  t.is(multiply(2, 2), 4)
})

test('should not operate on Strings', t => {
  t.true(Number.isNaN(multiply('a', 'b')))
})

test('should not operate on mixed kinds', t => {
  t.true(Number.isNaN(multiply('a', 1)))
  t.true(Number.isNaN(multiply(0, 'b')))
})
