import test from 'ava'

import sortBy from '../src/sortBy'

const length = s => s.length
const second = xs => xs[1]
const identity = x => x

test('should operate on Arrays', t => {
  t.deepEqual(sortBy(length, ['a', 'aaa', 'aa', 'a']), ['a', 'a', 'aa', 'aaa'])
  t.deepEqual(sortBy(length, ['', 'aaa', 'a']), ['', 'a', 'aaa'])
})

test('should operate on Maps', t => {
  t.deepEqual([...sortBy(second, new Map([['foo', 10], ['bar', 42], ['baz', 1]]))], [['baz', 1], ['foo', 10], ['bar', 42]])
})

test('should operate on Sets', t => {
  t.deepEqual([...sortBy(identity, new Set([10, 42, 1]))], [1, 10, 42])
})

test('should not operate on Strings', t => {
  t.deepEqual(sortBy(length, 'abc'), 'abc')
})
