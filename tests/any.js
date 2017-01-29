import test from 'ava'

import any from '../src/any'
import equals from '../src/equals'

const isA = equals('a')
const isFoo = equals('foo')
const isZero = equals(0)
const isTrue = equals(true)

test('should test predicate on Array', t => {
  t.is(any(isFoo, ['foo', 'foo', 'foo']), true)
  t.is(any(isFoo, ['foo', 'foo', 'bar']), true)
  t.is(any(isFoo, ['foo', 'bar', 'bar']), true)
  t.is(any(isFoo, ['bar', 'bar', 'bar']), false)

  t.is(any(isZero, [0, 1, 0]), true)
  t.is(any(isZero, [1, 0, 1]), true)
  t.is(any(isZero, [1, 1, 1]), false)
})

test('should test predicate on Boolean', t => {
  t.is(any(isTrue, true), true)
  t.is(any(isTrue, false), false)
})

test('should test predicate on Map', t => {
  t.is(any(isFoo, new Map([[1, 'foo'], [2, 'foo'], [3, 'foo']])), true)
  t.is(any(isFoo, new Map([[1, 'foo'], [2, 'foo'], [3, 'bar']])), true)
  t.is(any(isFoo, new Map([[1, 'foo'], [2, 'bar'], [3, 'bar']])), true)
  t.is(any(isFoo, new Map([[1, 'bar'], [2, 'bar'], [3, 'bar']])), false)
})

test('should test predicate on Number', t => {
  t.is(any(isZero, 0), true)
  t.is(any(isZero, 1), false)
})

test('should test predicate on Object', t => {
  t.is(any(isFoo, {a: 'foo', b: 'foo', c: 'foo'}), true)
  t.is(any(isFoo, {a: 'foo', b: 'foo', c: 'bar'}), true)
  t.is(any(isFoo, {a: 'foo', b: 'bar', c: 'bar'}), true)
  t.is(any(isFoo, {a: 'bar', b: 'bar', c: 'bar'}), false)
})

test('should test predicate on Set', t => {
  t.is(any(isFoo, new Set(['foo', 'foo', 'foo'])), true)
  t.is(any(isFoo, new Set(['foo', 'foo', 'bar'])), true)
  t.is(any(isFoo, new Set(['foo', 'bar', 'bar'])), true)
  t.is(any(isFoo, new Set(['bar', 'bar', 'bar'])), false)
})

test('should test predicate on String', t => {
  t.is(any(isA, 'aaa'), true)
  t.is(any(isA, 'aab'), true)
  t.is(any(isA, 'abb'), true)
  t.is(any(isA, 'bbb'), false)
})

test('should not operate on a Symbol', t => {
  t.is(any(isA, Symbol('a')), false)
})
