import test from 'ava'

import lte from '../src/lte'

test('should operate on Numbers', t => {
  t.is(lte(1, 2), true)
  t.is(lte(1, 1), true)
  t.is(lte(1, 0), false)
})

test('should not operate on Strings', t => {
  t.is(lte('a', 'b'), undefined)
})
