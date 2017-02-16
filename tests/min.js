import test from 'ava'

import min from '../src/min'

test('should operate on Arrays', t => {
  t.deepEqual(min([1], [2]), [1])
  t.deepEqual(min([2], [1]), [1])
  t.deepEqual(min([1, 200, 3], [2]), [1, 200, 3])
  t.deepEqual(min([1, 2, 3, 4], [2, 3, 4]), [1, 2, 3, 4])
  t.deepEqual(min([1, 200, 3, 4], [0, 1, 2, 3]), [0, 1, 2, 3])
})

test('should operate on Numbers', t => {
  t.is(min(1, 2), 1)
  t.is(min(2, 2), 2)
  t.is(min(3, 2), 2)
})

test('should operate on Strings', t => {
  t.is(min('a', 'b'), 'a')
  t.is(min('c', 'b'), 'b')
  t.is(min('c', 'd'), 'c')
})
