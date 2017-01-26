import test from 'ava'

import multiply from '../src/multiply'
import type from '../src/type'

test('should be curried', t => {
  const double = multiply(2)
  const triple = multiply(3)

  t.is(type(double), 'Function')
  t.is(double(2), 4)
  t.is(triple(2), 6)
})

test('should multiply Numbers', t => {
  t.is(multiply(1, 1), 1)
  t.is(multiply(2, 1), 2)
  t.is(multiply(2, 2), 4)
})
