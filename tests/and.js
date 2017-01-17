import test from 'ava'

import and from '../src/and'

test('should return true if both arguments are true', t => {
  t.is(and(true, true), true)
})

test('should return false if one argument is false', t => {
  t.is(and(true, false), false)
  t.is(and(false, true), false)
  t.is(and(false, false), false)
})

test('should be curried', t => {
  t.is(and(true)(true), true)
  t.is(and(false)(true), false)
})
