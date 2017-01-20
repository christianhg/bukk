import test from 'ava'

import tail from '../src/tail'

test('should operate on an Array', t => {
  t.deepEqual(tail([1, 2, 3, 4, 5]), [2, 3, 4, 5])
  t.deepEqual(tail([1]), [])
  t.deepEqual(tail([]), [])
})

test('should operate on a String', t => {
  t.is(tail('foobar'), 'oobar')
  t.is(tail('hello world'), 'ello world')
  t.is(tail('f'), '')
  t.is(tail(''), '')
})
