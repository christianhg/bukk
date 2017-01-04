import test from 'ava'

import add from '../src/add'
import type from '../src/type'

test('should be defined', t => {
  t.is(type(add), 'Function')
})

test('should be curried', t => {
  t.is(type(add(1)), 'Function')
})

test('should add two numbers', t => {
  t.is(add(1, 1), 2)
  t.is(add(1, -1), 0)
  t.is(add(1)(-1), 0)
})

test('should add two strings', t => {
  t.is(add('foo', 'bar'), 'foobar')
})
