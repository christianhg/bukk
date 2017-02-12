import test from 'ava'

import prepend from '../src/prepend'

test('should operate on Arrays', t => {
  t.deepEqual(prepend('c', ['a', 'b']), ['c', 'a', 'b'])
  t.deepEqual(prepend('foo', []), ['foo'])
  t.deepEqual(prepend('bar', ['foo']), ['bar', 'foo'])
})

test('should operate on Maps', t => {
  t.deepEqual(prepend([3, 'c'], new Map([[1, 'a'], [2, 'b']])), new Map([[3, 'c'], [1, 'a'], [2, 'b']]))
  t.deepEqual(prepend([1, 'foo'], new Map([])), new Map([[1, 'foo']]))
  t.deepEqual(prepend([2, 'bar'], new Map([[1, 'foo']])), new Map([[2, 'bar'], [1, 'foo']]))
})

test('should not operate on Objects', t => {
  t.deepEqual(prepend('c', {1: 'a', 2: 'b'}), {1: 'a', 2: 'b'})
  t.deepEqual(prepend('foo', {}), {})
  t.deepEqual(prepend('bar', {1: 'foo'}), {1: 'foo'})
})

test('should operate on Sets', t => {
  t.deepEqual(prepend('c', new Set(['a', 'b'])), new Set(['c', 'a', 'b']))
  t.deepEqual(prepend('foo', new Set([])), new Set(['foo']))
  t.deepEqual(prepend('bar', new Set(['foo'])), new Set(['bar', 'foo']))
})

test('should operate on Strings', t => {
  t.deepEqual(prepend('c', 'ab'), 'cab')
  t.deepEqual(prepend('foo', ''), 'foo')
  t.deepEqual(prepend('bar', 'foo'), 'barfoo')
})
