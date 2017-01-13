import test from 'ava'

import reject from '../src/reject'

const isA = c => c === 'a'
const isOdd = n => n % 2 !== 0
const isFoo = s => s === 'foo'

test('should reject from an Array', t => {
  t.deepEqual(reject(isOdd, [1, 2, 3]), [2])
})

test('should reject from a Map', t => {
  t.deepEqual(
    reject(
      isFoo,
      new Map([['x', 'foo'], ['y', 'bar'], ['z', 'baz']])
    ),
    new Map([['y', 'bar'], ['z', 'baz']])
  )
})

test('should not reject from a Number', t => {
  t.deepEqual(reject(isOdd, 1), 1)
  t.deepEqual(reject(isOdd, 2), 2)
})

test('should reject from an Object', t => {
  t.deepEqual(
    reject(isFoo, {x: 'foo', y: 'bar', z: 'baz'}),
    {y: 'bar', z: 'baz'}
  )
})

test('should reject from a Set', t => {
  t.deepEqual(reject(isOdd, new Set([1, 2, 3])), new Set([2]))
})

test('should reject from a String', t => {
  t.deepEqual(reject(isA, 'aaa'), '')
  t.deepEqual(reject(isA, 'abc'), 'bc')
})
