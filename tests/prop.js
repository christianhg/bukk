import test from 'ava'

import prop from '../src/prop'

const obj = { foo: 1, bar: 2 }

test('should operate on Objects', t => {
  t.is(prop('bar', obj), 2)
  t.is(prop('baz', obj), undefined)
})

test('should not operate on other kinds', t => {
  t.is(prop('bar', ['foo', 'bar']), undefined)
  t.is(prop('bar', 'foobar'), undefined)
})
