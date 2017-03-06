import test from 'ava'

import gte from '../src/gte'

test('should operate on Numbers', t => {
  t.is(gte(1, 2), false)
  t.is(gte(1, 1), true)
  t.is(gte(1, 0), true)
})

test('should not operate on Strings', t => {
  t.is(gte('a', 'b'), undefined)
})
