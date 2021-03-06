import test from 'ava'

import take from '../src/take'

test('should operate on an Array', t => {
  t.deepEqual(take(3, [1, 2, 3, 4, 5]), [1, 2, 3])
  t.deepEqual(take(1, [1, 2, 3, 4, 5]), [1])
})

test('should operate on a Map', t => {
  t.deepEqual(take(2, new Map([['a', 1], ['b', 2], ['c', 3]])), new Map([['a', 1], ['b', 2]]))
})

test('should not operate on a Number', t => {
  t.is(take(1, 42), undefined)
})

test('should not operate on an Object', t => {
  t.deepEqual(take(1, {a: 1, b: 2}), undefined)
})

test('should operate on a Set', t => {
  t.deepEqual(take(3, new Set(['a', 'b', 'c', 'd', 'e'])), new Set(['a', 'b', 'c']))
})

test('should operate on a String', t => {
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
