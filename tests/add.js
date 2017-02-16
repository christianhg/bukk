import test from 'ava'

import add from '../src/add'
import kind from '../src/kind'

test('should be defined', t => {
  t.is(kind(add), 'Function')
})

test('should be curried', t => {
  const addFive = add(5)

  t.is(kind(add(1)), 'Function')
  t.is(addFive(1), 6)
  t.is(addFive(-5), 0)
})

test('should add two numbers', t => {
  t.is(add(1, 1), 2)
  t.is(add(1, -1), 0)
  t.is(add(1)(-1), 0)
})

test('should add two strings', t => {
  t.is(add('foo', 'bar'), 'foobar')
})
