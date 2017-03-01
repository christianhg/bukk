import test from 'ava'

import divide from '../src/divide'

test('should operate on Numbers', t => {
  t.is(divide(1, 2), 0.5)
  t.is(divide(25, 100), 0.25)
  t.is(divide(42, 3.5), 12)
})

test('should not operate on Strings', t => {
  t.true(Number.isNaN(divide('a', 'b')))
})

test('should not operate on mixed kinds', t => {
  t.true(Number.isNaN(divide('a', 1)))
  t.true(Number.isNaN(divide(0, 'b')))
})
