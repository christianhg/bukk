import test from 'ava'

import append from '../src/append'

test('should operate on Arrays', t => {
  t.deepEqual(append('c', ['a', 'b']), ['a', 'b', 'c'])
  t.deepEqual(append('foo', []), ['foo'])
  t.deepEqual(append('bar', ['foo']), ['foo', 'bar'])
})

test('should operate on Maps', t => {
  t.deepEqual(append([3, 'c'], new Map([[1, 'a'], [2, 'b']])), new Map([[1, 'a'], [2, 'b'], [3, 'c']]))
  t.deepEqual(append([1, 'foo'], new Map([])), new Map([[1, 'foo']]))
  t.deepEqual(append([2, 'bar'], new Map([[1, 'foo']])), new Map([[1, 'foo'], [2, 'bar']]))
})

test('should not operate on Objects', t => {
  t.deepEqual(append('c', {1: 'a', 2: 'b'}), {1: 'a', 2: 'b'})
  t.deepEqual(append('foo', {}), {})
  t.deepEqual(append('bar', {1: 'foo'}), {1: 'foo'})
})

test('should operate on Sets', t => {
  t.deepEqual(append('c', new Set(['a', 'b'])), new Set(['a', 'b', 'c']))
  t.deepEqual(append('foo', new Set([])), new Set(['foo']))
  t.deepEqual(append('bar', new Set(['foo'])), new Set(['foo', 'bar']))
})

test('should operate on Strings', t => {
  t.deepEqual(append('c', 'ab'), 'abc')
  t.deepEqual(append('foo', ''), 'foo')
  t.deepEqual(append('bar', 'foo'), 'foobar')
})
