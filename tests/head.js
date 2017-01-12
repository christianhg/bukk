import test from 'ava'

import head from '../src/head'

test('should return head of an Array', t => {
  t.is(head([1, 2, 3]), 1)
  t.is(head(['foo', 'bar', 'baz']), 'foo')
})

test('should return head of a Map', t => {
  t.deepEqual(head(new Map([['x', 1], ['y', 2], ['z', 3]])), ['x', 1])
})

test('should not return the last of a Number', t => {
  t.is(head(42), undefined)
})

test('should return the head of an Object', t => {
  t.is(head({x: 1, y: 2, z: 3}), 1)
})

test('should return head of a Set', t => {
  t.is(head(new Set([1, 2, 3])), 1)
  t.is(head(new Set(['foo', 'bar', 'baz'])), 'foo')
})

test('should return head of a String', t => {
  t.is(head('foo'), 'f')
  t.is(head('bar'), 'b')
  t.is(head('baz'), 'b')
})

test('should return undefined if head does not exist', t => {
  t.is(head([]), undefined)
  t.is(head(''), undefined)
})
