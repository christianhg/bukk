import test from 'ava'

import max from '../src/max'

test('should operate on Arrays', t => {
  t.deepEqual(max([1], [2]), [2])
  t.deepEqual(max([2], [1]), [2])
  t.deepEqual(max([1, 200, 3], [2]), [2])
  t.deepEqual(max([1, 2, 3, 4], [2, 3, 4]), [2, 3, 4])
  t.deepEqual(max([1, 200, 3, 4], [0, 1, 2, 3]), [1, 200, 3, 4])
})

test('should operate on Numbers', t => {
  t.is(max(1, 2), 2)
  t.is(max(2, 2), 2)
  t.is(max(3, 2), 3)
})

test('should operate on Strings', t => {
  t.is(max('a', 'b'), 'b')
  t.is(max('c', 'b'), 'c')
  t.is(max('c', 'd'), 'd')
})
