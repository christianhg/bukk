import test from 'ava'

import compose from '../src/compose'
import add from '../src/add'
import inc from '../src/inc'
import multiply from '../src/multiply'

test('should compose functions from right to left', t => {
  const double = multiply(2)
  const addFive = add(5)

  t.is(compose(double, addFive)(1), 12)
  t.is(compose(double, inc, addFive)(2), 16)
  t.is(compose(inc, double, addFive)(10), 31)
})

test('should accept the last function to be of any arity', t => {
  t.is(compose(inc, multiply)(2, 3), 7)
})
