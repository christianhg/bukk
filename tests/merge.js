import test from 'ava'

import merge from '../src/merge'

test('should operate on Objects', t => {
  t.deepEqual(merge({}, {}), {})
  t.deepEqual(merge({'a': 1}, {'b': 2}), {'a': 1, 'b': 2})
  t.deepEqual(merge({}, {'a': 1, 'b': 2}), {'a': 1, 'b': 2})
  t.deepEqual(merge({'a': 2, 'c': 3}, {'a': 1, 'b': 2}), {'a': 1, 'b': 2, 'c': 3})
})

test('should not operate on Arrays', t => {
  t.deepEqual(merge([1], [2, 3]), undefined)
})
