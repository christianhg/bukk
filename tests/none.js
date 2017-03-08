import test from 'ava'

import none from '../src/none'
import equals from '../src/equals'

const isA = equals('a')
const isFoo = equals('foo')
const isZero = equals(0)
const isTrue = equals(true)

test('should test predicate on Array', t => {
  t.is(none(isFoo, ['bar', 'bar', 'bar']), true)
  t.is(none(isFoo, ['foo', 'foo', 'bar']), false)

  t.is(none(isZero, [0, 0, 0]), false)
  t.is(none(isZero, [1, 0, 0]), false)
  t.is(none(isZero, [1, 1, 0]), false)
  t.is(none(isZero, [1, 1, 1]), true)
})

test('should not operate on a Boolean', t => {
  t.is(none(isTrue, true), undefined)
  t.is(none(isTrue, false), undefined)
})

test('should test predicate on Map', t => {
  t.is(none(isFoo, new Map([[1, 'foo'], [2, 'foo'], [3, 'foo']])), false)
  t.is(none(isFoo, new Map([[1, 'foo'], [2, 'foo'], [3, 'bar']])), false)
  t.is(none(isFoo, new Map([[1, 'foo'], [2, 'bar'], [3, 'bar']])), false)
  t.is(none(isFoo, new Map([[1, 'bar'], [2, 'bar'], [3, 'bar']])), true)
})

test('should not operate on a Number', t => {
  t.is(none(isZero, 1), undefined)
  t.is(none(isZero, 0), undefined)
})

test('should test predicate on Object', t => {
  t.is(none(isFoo, {a: 'foo', b: 'foo', c: 'foo'}), false)
  t.is(none(isFoo, {a: 'foo', b: 'foo', c: 'bar'}), false)
  t.is(none(isFoo, {a: 'foo', b: 'bar', c: 'bar'}), false)
  t.is(none(isFoo, {a: 'bar', b: 'bar', c: 'bar'}), true)
})

test('should test predicate on Set', t => {
  t.is(none(isFoo, new Set(['foo', 'foo', 'foo'])), false)
  t.is(none(isFoo, new Set(['foo', 'foo', 'bar'])), false)
  t.is(none(isFoo, new Set(['foo', 'bar', 'bar'])), false)
  t.is(none(isFoo, new Set(['bar', 'bar', 'bar'])), true)
})

test('should test predicate on String', t => {
  t.is(none(isA, 'aaa'), false)
  t.is(none(isA, 'aab'), false)
  t.is(none(isA, 'abb'), false)
  t.is(none(isA, 'bbb'), true)
})

test('should not operate on a Symbol', t => {
  t.is(none(isA, Symbol('a')), undefined)
})
