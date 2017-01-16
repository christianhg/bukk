import test from 'ava'

import gte from '../src/gte'

test('should compare Numbers', t => {
  t.is(gte(1, 2), false)
  t.is(gte(1, 1), true)
  t.is(gte(1, 0), true)
})
