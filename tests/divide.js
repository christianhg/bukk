import test from 'ava'

import divide from '../src/divide'

test('should divide Numbers', t => {
  t.is(divide(1, 2), 0.5)
  t.is(divide(25, 100), 0.25)
  t.is(divide(42, 3.5), 12)
})
