import test from 'ava'

import slice from '../src/slice'

test('should slice an Array', t => {
  t.deepEqual(slice(0, 3, [1, 2, 3, 4, 5]), [1, 2, 3])
  t.deepEqual(slice(0, -3, [1, 2, 3, 4, 5]), [1, 2])
})

test('should not slice a Number', t => {
  t.is(slice(0, 1, 42), 42)
})

test('should not slice an Object', t => {
  t.deepEqual(slice(0, 1, {a: 1, b: 2}), {a: 1, b: 2})
})

test('should slice a String', t => {
  t.is(slice(0, 3, 'foobar'), 'foo')
  t.is(slice(0, -3, 'hello world'), 'hello wo')
})
