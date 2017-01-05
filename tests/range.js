import test from 'ava'

import range from '../src/range'

test('should return an Array of Numbers', t => {
  t.deepEqual(range(1, 5), [1, 2, 3, 4])
  t.deepEqual(range(-1, 5), [-1, 0, 1, 2, 3, 4])
  t.deepEqual(range(0, 4), [0, 1, 2, 3])
  t.deepEqual(range(10, 12), [10, 11])
})
