import test from 'ava'

import equals from '../src/equals'
import find from '../src/find'

const isA = equals('a')
const isFoo = equals('foo')
const isOdd = n => n % 2 !== 0
const xIs2 = o => o['x'] === 2

test('should operate on a Array', t => {
  t.is(find(isFoo, ['foo', 'bar', 'baz']), 'foo')
  t.is(find(isOdd, [4, 3, 2, 1]), 3)
  t.deepEqual(find(xIs2, [{x: 1}, {x: 2}, {x: 3}]), {x: 2})
})

test('should operate on a Map', t => {
  t.deepEqual(
    find(isFoo, new Map([['x', 'foo'], ['y', 'bar'], ['z', 'baz']])),
    ['x', 'foo']
  )
  t.deepEqual(
    find(isFoo, new Map([['x', 'foo'], ['y', 'bar'], ['z', 'baz']])),
    ['x', 'foo']
  )
})

test('should operate on an Object', t => {
  t.is(find(isFoo, {x: 'foo', y: 'bar', z: 'baz'}), 'foo')
  t.is(find(isOdd, {x: 42, y: 43, z: 44}), 43)
})

test('should operate on a Set', t => {
  t.is(find(isFoo, new Set(['foo', 'bar', 'baz'])), 'foo')
  t.is(find(isOdd, new Set([42, 43, 44, 45])), 43)
})

test('should operate on a String', t => {
  t.is(find(isA, 'cba'), 'a')
  t.is(find(isFoo, 'cba'), undefined)
})
