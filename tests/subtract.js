import test from 'ava'

import subtract from '../src/subtract'

test('should subtract Numbers', t => {
  t.is(subtract(1, 1), 0)
  t.is(subtract(-1, 1), -2)
  t.is(subtract(-1, -1), 0)
  t.is(subtract(1, -1), 2)
})
