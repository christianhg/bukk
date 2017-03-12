import test from 'ava'

import concat from '../src/concat'

test('should operate on Arrays', t => {
  t.deepEqual(concat([], []), [])
  t.deepEqual(concat([], [1]), [1])
  t.deepEqual(concat([1], [2, 3]), [1, 2, 3])
})

test('should operate on Maps', t => {
  t.deepEqual(concat(new Map([['x', 1]]), new Map([['y', 2]])), new Map([['x', 1], ['y', 2]]))
})

test('should not operate on Objects', t => {
  t.deepEqual(concat({}, {}), undefined)
  t.deepEqual(concat({'a': 1}, {'b': 2}), undefined)
})

test('should operate on Sets', t => {
  t.deepEqual(concat(new Set([]), new Set([])), new Set([]))
  t.deepEqual(concat(new Set([]), new Set([1])), new Set([1]))
  t.deepEqual(concat(new Set([1]), new Set([2, 3])), new Set([1, 2, 3]))
})

test('should operate on Strings', t => {
  t.deepEqual(concat('', ''), '')
  t.deepEqual(concat('', 'foo'), 'foo')
  t.deepEqual(concat('foo', 'bar'), 'foobar')
})
