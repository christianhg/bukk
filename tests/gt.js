import test from 'ava'

import gt from '../src/gt'

test('should compare Numbers', t => {
  t.is(gt(1, 2), false)
  t.is(gt(1, 1), false)
  t.is(gt(1, 0), true)
})
