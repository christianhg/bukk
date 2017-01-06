import test from 'ava'

import any from '../src/any'
import equals from '../src/equals'

test('should return true if any elements match predicate', t => {
  const isFoo = equals('foo')

  t.is(any(isFoo, ['foo', 'foo', 'foo']), true)
  t.is(any(isFoo, ['foo', 'foo', 'bar']), true)
  t.is(any(isFoo, ['foo', 'bar', 'bar']), true)
  t.is(any(isFoo, ['bar', 'bar', 'bar']), false)

  const isZero = equals(0)

  t.is(any(isZero, [0, 1, 0]), true)
  t.is(any(isZero, [1, 0, 1]), true)
  t.is(any(isZero, [1, 1, 1]), false)
})
