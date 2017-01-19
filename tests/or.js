import test from 'ava'

import or from '../src/or'

test('should return true if on agument is true', t => {
  t.is(or(true, false), true)
  t.is(or(false, true), true)
  t.is(or(true, true), true)
})

test('should return false if no argument is true', t => {
  t.is(or(false, false), false)
})

test('should be curried', t => {
  t.is(or(true)(true), true)
  t.is(or(false)(true), true)
  t.is(or(true)(false), true)
  t.is(or(false)(false), false)
})
