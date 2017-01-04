import test from 'ava'

import add from '../src/add'
import map from '../src/map'
import type from '../src/type'

const inc = add(1)
const addBar = s => `${s}bar`

test('should be curried', t => {
  t.is(type(map(inc)), 'Function')
})

test('should map an Array', t => {
  t.deepEqual(map(inc, [1, 2, 3]), [2, 3, 4])
})

test('should map an Object', t => {
  t.deepEqual(map(inc, {x: 1, y: 2, z: 3}), {x: 2, y: 3, z: 4})
})

test('should map a Number', t => {
  t.deepEqual(map(inc, 1), 2)
})

test('should map a String', t => {
  t.deepEqual(map(addBar, 'foo'), 'foobar')
})

test('should map a Boolean', t => {
  t.deepEqual(map(inc, true), 2)
})

test('should not map Null', t => {
  t.deepEqual(map(inc, null), null)
})

test('should not map a Symbol', t => {
  const one = Symbol(1)

  t.deepEqual(map(inc, one), one)
})

test('should not map Undefined', t => {
  t.deepEqual(map(inc, undefined), undefined)
})

test('should map a Map', t => {
  t.deepEqual(
    map(inc, new Map([['x', 1], ['y', 2], ['z', 3]])),
    new Map([['x', 2], ['y', 3], ['z', 4]])
  )
})

test('should map a Set', t => {
  t.deepEqual(map(inc, new Set([1, 2, 3])), new Set([2, 3, 4]))
})
