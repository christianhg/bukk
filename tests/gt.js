import test from 'ava'

import gt from '../src/gt'

test('should operate on Numbers', t => {
  t.is(gt(1, 2), false)
  t.is(gt(1, 1), false)
  t.is(gt(1, 0), true)
})

test('should not operate on Strings', t => {
  t.is(gt('a', 'b'), undefined)
})
