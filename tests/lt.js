import test from 'ava'

import lt from '../src/lt'

test('should compare Numbers', t => {
  t.is(lt(1, 2), true)
  t.is(lt(1, 1), false)
  t.is(lt(1, 0), false)
})
