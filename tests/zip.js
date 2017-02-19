import test from 'ava'

import zip from '../src/zip'

test('should operate on Arrays', t => {
  t.deepEqual(zip([1, 2, 3], ['a', 'b', 'c']), [[1, 'a'], [2, 'b'], [3, 'c']])
})

test('should discard overflowing values', t => {
  t.deepEqual(zip([1, 2, 3], ['a', 'b']), [[1, 'a'], [2, 'b']])
  t.deepEqual(zip([1, 2], ['a', 'b', 'c']), [[1, 'a'], [2, 'b']])
})

test('should not zip different kinds', t => {
  t.deepEqual(zip([1, 2], {foo: 1, bar: 2}), undefined)
})

test('should not operate on Objects', t => {
  t.deepEqual(zip({foo: 1, bar: 2}, {baz: 3}), undefined)
})
