import test from 'ava'

import min from '../src/min'

test('should operate on Numbers', t => {
  t.is(min(1, 2), 1)
  t.is(min(2, 2), 2)
  t.is(min(3, 2), 2)
})

test('should not operate on Strings', t => {
  t.is(min('a', 'b'), undefined)
})
