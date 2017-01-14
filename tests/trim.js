import test from 'ava'

import trim from '../src/trim'

test('should trim a String', t => {
  t.is(trim('  abc '), 'abc')
  t.is(trim('foo      '), 'foo')
  t.is(trim('       foo      bar'), 'foo      bar')
})

test('should ignore all other types', t => {
  t.deepEqual(trim([1, 2, 3]), [1, 2, 3])
  t.is(trim(42), 42)
  t.deepEqual(trim({x: 1, y: 2, z: 3}), {x: 1, y: 2, z: 3})
})

test('should not mutate its argument', t => {
  const s = '   xyz   '
  t.is(trim(s), 'xyz')
  t.is(s, '   xyz   ')
})
