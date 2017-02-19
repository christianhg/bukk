import test from 'ava'

import type from '../src/type'

test('should recognize boolean', t => {
  t.is(type(false), 'boolean')
})

test('should recognize null', t => {
  t.is(type(null), 'null')
})

test('should recognize number', t => {
  t.is(type(42), 'number')
})

test('should recognize object', t => {
  t.is(type({}), 'object')
})

test('should recognize string', t => {
  t.is(type('foo'), 'string')
})

test('should recognize symbol', t => {
  t.is(type(Symbol('42')), 'symbol')
})

test('should recognize undefined', t => {
  t.is(type(undefined), 'undefined')
})
