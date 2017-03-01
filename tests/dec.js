import test from 'ava'

import dec from '../src/dec'

test('should operate on a Number', t => {
  t.is(dec(0), -1)
  t.is(dec(1), 0)
  t.is(dec(-1), -2)
  t.is(dec(42), 41)
})

test('should not operate on a String', t => {
  t.true(Number.isNaN(dec('a')))
})
