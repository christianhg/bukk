import test from 'ava'

import subtract from '../src/subtract'

test('should operate on Numbers', t => {
  t.is(subtract(1, 1), 0)
  t.is(subtract(-1, 1), -2)
  t.is(subtract(-1, -1), 0)
  t.is(subtract(1, -1), 2)
})

test('should not operate on Strings', t => {
  t.true(Number.isNaN(subtract('a', 'b')))
})

test('should not operate on mixed kinds', t => {
  t.true(Number.isNaN(subtract('a', 1)))
  t.true(Number.isNaN(subtract(0, 'b')))
})
