import test from 'ava'

import inc from '../src/inc'

test('should increment a Number', t => {
  t.is(inc(0), 1)
  t.is(inc(-1), 0)
  t.is(inc(42), 43)
})
