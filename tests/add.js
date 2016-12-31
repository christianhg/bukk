import test from 'ava'

import add from '../src/add'

test('should be defined', t => {
  t.is(typeof add, 'function')
})

test('should be curried', t => {
  t.is(typeof add(1), 'function')
})

test('should add two numbers', t => {
  t.is(add(1, 1), 2)
  t.is(add(1, -1), 0)
  t.is(add(1)(-1), 0)
})

test('should add two strings', t => {
  t.is(add('foo', 'bar'), 'foobar')
})
