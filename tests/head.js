import test from 'ava'

import head from '../src/head'

test('should return head of an Array', t => {
  t.is(head([1,2,3]), 1)
})

test('should return head of a String', t => {
  t.is(head('foo'), 'f')
})

test('should return undefined if head does not exist', t => {
  t.is(head([]), undefined)
  t.is(head(''), undefined)
  t.is(head({x: 1, y: 2, z: 3}), undefined)
})
