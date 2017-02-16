import test from 'ava'

import kind from '../src/kind'

test('should recognize Array', t => {
  t.is(kind([]), 'Array')
})

test('should recognize Function', t => {
  t.is(kind(kind), 'Function')
})

test('should recognize Map', t => {
  t.is(kind(new Map().set('one', 1)), 'Map')
})

test('should recognize NaN', t => {
  t.is(kind(NaN), 'Number')
})

test('should recognize Null', t => {
  t.is(kind(null), 'Null')
})

test('should recognize Number', t => {
  t.is(kind(1), 'Number')
})

test('should recognize Object', t => {
  t.is(kind({}), 'Object')
})

test('should recognize Set', t => {
  t.is(kind(new Set([1, 2, 3])), 'Set')
})

test('should recognize String', t => {
  t.is(kind('foo'), 'String')
})

test('should recognize Symbol', t => {
  t.is(kind(Symbol(1)), 'Symbol')
})

test('should recognize Undefined', t => {
  t.is(kind(undefined), 'Undefined')
})
