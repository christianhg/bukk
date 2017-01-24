import test from 'ava'

import take from '../src/take'

test('should take from an Array', t => {
  t.deepEqual(take(3, [1, 2, 3, 4, 5]), [1, 2, 3])
  t.deepEqual(take(1, [1, 2, 3, 4, 5]), [1])
})

test('should not take from a Number', t => {
  t.is(take(1, 42), 42)
})

test('should not take from an Object', t => {
  t.deepEqual(take(1, {a: 1, b: 2}), {a: 1, b: 2})
})

test('should slice a String', t => {
  t.is(take(3, 'foobar'), 'foo')
  t.is(take(5, 'hello world'), 'hello')
})

test('should not take a negative number', t => {
  t.deepEqual(take(-1, [1, 2, 3, 4, 5]), [])
  t.is(take(-3, 'foobar'), '')
})

test('should be curried', t => {
  const take2 = take(2)

  t.deepEqual(take2([1, 2, 3, 4, 5]), [1, 2])
  t.deepEqual(take2('foo'), 'fo')
})
