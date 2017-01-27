import test from 'ava'

import pipe from '../src/pipe'
import add from '../src/add'
import inc from '../src/inc'
import multiply from '../src/multiply'

test('should compose functions from left to right', t => {
  const double = multiply(2)
  const addFive = add(5)

  t.is(pipe(double, addFive)(1), 7)
  t.is(pipe(double, inc, addFive)(2), 10)
  t.is(pipe(inc, double, addFive)(10), 27)
})
