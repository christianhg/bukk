import test from 'ava'

import reverse from '../src/reverse'

test('should operate on Arrays', t => {
  t.deepEqual(reverse([1, 2, 3]), [3, 2, 1])
  t.deepEqual(reverse([]), [])
  t.deepEqual(reverse(['a', 'b', 'c']), ['c', 'b', 'a'])
})

test('should operate on Maps', t => {
  t.deepEqual([...reverse(new Map([['x', 1], ['y', 2], ['z', 3]]))], [['z', 3], ['y', 2], ['x', 1]])
  t.deepEqual(reverse(new Map([])), new Map([]))
})

test('should not operate on Objects', t => {
  t.deepEqual(reverse({x: 1, y: 2, z: 3}), {x: 1, y: 2, z: 3})
})

test('should operate on Sets', t => {
  t.deepEqual([...reverse(new Set([1, 2, 3]))], [3, 2, 1])
})

test('should operate on Strings', t => {
  t.deepEqual(reverse('abc'), 'cba')
  t.deepEqual(reverse(''), '')
})
