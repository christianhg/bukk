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

test('should map any Functor', t => {
  const Just = x => ({
    map: f => Just(f(x)),
    value: x
  })

  t.deepEqual(map(inc, Just(1)).value, 2)
  t.deepEqual(map(addBar, Just('foo')).value, 'foobar')
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

test('should map a Map', t => {
  t.deepEqual(
    map(inc, new Map([['x', 1], ['y', 2], ['z', 3]])),
    new Map([['x', 2], ['y', 3], ['z', 4]])
  )
})

test('should map a Set', t => {
  t.deepEqual(map(inc, new Set([1, 2, 3])), new Set([2, 3, 4]))
})
