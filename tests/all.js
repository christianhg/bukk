import test from 'ava'

import all from '../src/all'
import equals from '../src/equals'

test('should return true if all elements match predicate', t => {
  const isFoo = equals('foo')

  t.is(all(isFoo, ['foo', 'foo', 'foo']), true)
  t.is(all(isFoo, ['foo', 'foo', 'bar']), false)

  const isZero = equals(0)

  t.is(all(isZero, [0, 0, 0]), true)
  t.is(all(isZero, [1, 0, 1]), false)
})
