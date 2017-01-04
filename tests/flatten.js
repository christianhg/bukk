import test from 'ava'

import flatten from '../src/flatten'

test('should flatten an Array', t => {
  t.deepEqual(flatten([1, [2, [3]]]), [1, 2, 3])
  t.deepEqual(
    flatten([1, 2, [3], 4, [5, 6, [7, 8, [9]], 10]]),
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  )
})
