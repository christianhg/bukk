import test from 'ava'

import lte from '../src/lte'

test('should compare Numbers', t => {
  t.is(lte(1, 2), true)
  t.is(lte(1, 1), true)
  t.is(lte(1, 0), false)
})
