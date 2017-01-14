import test from 'ava'

import add from '../src/add'
import multiply from '../src/multiply'
import reduce from '../src/reduce'
import subtract from '../src/subtract'

test('should reduce an Array', t => {
  t.is(reduce(add, 0, [1, 2, 3]), 6)
  t.is(reduce(multiply, 2, [1, 2, 3]), 12)
  t.is(reduce(multiply, 0, [1, 2, 3]), 0)
})

test('should reduce a Map', t => {
  t.is(reduce(add, 0, new Map([['x', 1], ['y', 2], ['z', 3]])), 6)
  t.is(
    reduce(add, '', new Map([['x', 'foo'], ['y', 'bar'], ['z', 'baz']])),
    'foobarbaz'
  )
})

test('should map an Object', t => {
  t.is(reduce(add, 0, {x: 1, y: 2, z: 3}), 6)
  t.is(reduce(subtract, 10, {x: 1, y: 2, z: 3}), 4)
})

test('should reduce a Set', t => {
  t.is(reduce(add, 0, new Set([1, 2, 3])), 6)
  t.is(reduce(multiply, 1, new Set([1, 2, 3])), 6)
})
