import test from 'ava'

import init from '../src/init'

test('should operate on an Array', t => {
  t.deepEqual(init([1, 2, 3, 4, 5]), [1, 2, 3, 4])
  t.deepEqual(init([1]), [])
  t.deepEqual(init([]), [])
})

test('should operate on a String', t => {
  t.is(init('foobar'), 'fooba')
  t.is(init('hello world'), 'hello worl')
  t.is(init('f'), '')
  t.is(init(''), '')
})
