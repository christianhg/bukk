import test from 'ava'

import type from '../src/type'

test('should recognize Array', t => {
  t.is(type([]), 'Array')
})

test('should recognize Map', t => {
  t.is(type(new Map().set('one', 1)), 'Map')
})

test('should recognize Null', t => {
  t.is(type(null), 'Null')
})

test('should recognize Number', t => {
  t.is(type(1), 'Number')
})

test('should recognize Object', t => {
  t.is(type({}), 'Object')
})

test('should recognize Set', t => {
  t.is(type(new Set([1,2,3])), 'Set')
})

test('should recognize String', t => {
  t.is(type('foo'), 'String')
})

test('should recognize Symbol', t => {
  t.is(type(Symbol(1)), 'Symbol')
})

test('should recognize Undefined', t => {
  t.is(type(undefined), 'Undefined')
})
