import test from 'ava'

import equals from '../src/equals'

test('should compare Numbers', t => {
  t.is(equals(1, 1), true)
  t.is(equals(1, 2), false)
})

test('should compare Strings', t => {
  t.is(equals('a', 'a'), true)
  t.is(equals('a', 'b'), false)
})

test('should compare Arrays', t => {
  t.is(equals([1, 2, 3], [1, 2, 3]), true)
  t.is(equals([1, 2, 3], [0, 1, 2]), false)
})

test('should compare nested Arrays', t => {
  t.is(equals([1, [2, [3]]], [1, [2, [3]]]), true)
  t.is(equals([1, [2, [3]]], [1, [2, [[3]]]]), false)
})

test('should compare Objects', t => {
  t.is(equals({a: 1, b: 2, c: 3}, {a: 1, b: 2, c: 3}), true)
  t.is(equals({a: 1, b: 2, c: 3}, {a: 0, b: 1, c: 2}), false)
})

test('should discard order when comparing Objects', t => {
  t.is(equals({c: 3, b: 2, a: 1}, {a: 1, b: 2, c: 3}), true)
})

test('should compare mixed types', t => {
  t.is(equals({a: 1, b: [2], c: false}, {a: 1, b: [2], c: false}), true)
})

test('should compare Sets', t => {
  t.is(equals(new Set([1, 2, 3]), new Set([1, 2, 3])), true)
  t.is(equals(new Set([1, 2, 3]), new Set([1, 3, 2])), false)
})

test('should compare Sets containing Objects', t => {
  t.is(equals(new Set([{a: 1}]), new Set([{a: 1}])), true)
  t.is(equals(new Set([{a: 1}]), new Set([{b: 1}])), false)
})

test('should compare Maps', t => {
  t.is(
    equals(
      new Map([['x', 1], ['y', 2], ['z', 3]]),
      new Map([['x', 1], ['y', 2], ['z', 3]])
    ), true)
  t.is(
    equals(
      new Map([['x', 0], ['y', 1], ['z', 2]]),
      new Map([['x', 1], ['y', 2], ['z', 3]])
    ), false)
})
