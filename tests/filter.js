import test from 'ava'

import filter from '../src/filter'

const isA = c => c === 'a'
const isOdd = n => n % 2 !== 0
const isFoo = s => s === 'foo'

test('should filter an Array', t => {
  t.deepEqual(filter(isOdd, [1, 2, 3]), [1, 3])
})

test('should filter a Map', t => {
  t.deepEqual(
    filter(
      isFoo,
      new Map([['x', 'foo'], ['y', 'bar'], ['z', 'baz']])
    ),
    new Map([['x', 'foo']])
  )
})

test('should not filter a Number', t => {
  t.deepEqual(filter(isOdd, 1), 1)
  t.deepEqual(filter(isOdd, 2), 2)
})

test('should filter an Object', t => {
  t.deepEqual(filter(isFoo, {x: 'foo', y: 'bar', z: 'baz'}), {x: 'foo'})
})

test('should filter a Set', t => {
  t.deepEqual(filter(isOdd, new Set([1, 2, 3])), new Set([1, 3]))
})

test('should filter a String', t => {
  t.deepEqual(filter(isA, 'aaa'), 'aaa')
  t.deepEqual(filter(isA, 'abc'), 'a')
})
