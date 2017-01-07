import test from 'ava'

import all from '../src/all'
import equals from '../src/equals'

const isA = equals('a')
const isFoo = equals('foo')
const isZero = equals(0)

test('should test predicate on Array', t => {
  t.is(all(isFoo, ['foo', 'foo', 'foo']), true)
  t.is(all(isFoo, ['foo', 'foo', 'bar']), false)

  t.is(all(isZero, [0, 0, 0]), true)
  t.is(all(isZero, [1, 0, 1]), false)
})

test('should test predicate on Map', t => {
  t.is(all(isFoo, new Map([[1, 'foo'], [2, 'foo'], [3, 'foo']])), true)
  t.is(all(isFoo, new Map([[1, 'foo'], [2, 'foo'], [3, 'bar']])), false)
  t.is(all(isFoo, new Map([[1, 'foo'], [2, 'bar'], [3, 'bar']])), false)
  t.is(all(isFoo, new Map([[1, 'bar'], [2, 'bar'], [3, 'bar']])), false)
})

test('should test predicate on Object', t => {
  t.is(all(isFoo, {a: 'foo', b: 'foo', c: 'foo'}), true)
  t.is(all(isFoo, {a: 'foo', b: 'foo', c: 'bar'}), false)
  t.is(all(isFoo, {a: 'foo', b: 'bar', c: 'bar'}), false)
  t.is(all(isFoo, {a: 'bar', b: 'bar', c: 'bar'}), false)
})

test('should test predicate on Set', t => {
  t.is(all(isFoo, new Set(['foo', 'foo', 'foo'])), true)
  t.is(all(isFoo, new Set(['foo', 'foo', 'bar'])), false)
  t.is(all(isFoo, new Set(['foo', 'bar', 'bar'])), false)
  t.is(all(isFoo, new Set(['bar', 'bar', 'bar'])), false)
})

test('should test predicate on String', t => {
  t.is(all(isA, 'aaa'), true)
  t.is(all(isA, 'aab'), false)
  t.is(all(isA, 'abb'), false)
  t.is(all(isA, 'bbb'), false)
})
