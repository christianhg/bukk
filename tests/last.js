import test from 'ava'

import last from '../src/last'

test('should return last of an Array', t => {
  t.is(last([1, 2, 3]), 3)
  t.is(last(['foo', 'bar', 'baz']), 'baz')
})

test('should return last of a Map', t => {
  t.deepEqual(last(new Map([['x', 1], ['y', 2], ['z', 3]])), ['z', 3])
})

test('should not return the last of a Number', t => {
  t.is(last(42), undefined)
})

test('should return last of a Set', t => {
  t.is(last(new Set([1, 2, 3])), 3)
  t.is(last(new Set(['foo', 'bar', 'baz'])), 'baz')
})

test('should return last of a String', t => {
  t.is(last('foo'), 'o')
  t.is(last('bar'), 'r')
  t.is(last('baz'), 'z')
})

test('should return undefined if last does not exist', t => {
  t.is(last([]), undefined)
  t.is(last(''), undefined)
})
