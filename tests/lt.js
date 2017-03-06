import test from 'ava'

import lt from '../src/lt'

test('should operate Numbers', t => {
  t.is(lt(1, 2), true)
  t.is(lt(1, 1), false)
  t.is(lt(1, 0), false)
})

test('should not operate on Strings', t => {
  t.is(lt('a', 'b'), undefined)
})
