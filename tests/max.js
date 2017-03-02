import test from 'ava'

import max from '../src/max'

test('should operate on Numbers', t => {
  t.is(max(1, 2), 2)
  t.is(max(2, 2), 2)
  t.is(max(3, 2), 3)
})

test('should not operate on Strings', t => {
  t.is(max('a', 'b'), undefined)
})
