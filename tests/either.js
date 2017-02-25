import test from 'ava'

import divide from '../src/divide'
import either from '../src/either'
import multiply from '../src/multiply'
import type from '../src/type'

const even = (x) => x % 2 === 0
const gt5 = (x) => x > 5

test('should return the result of the first function if it is truthy', t => {
  t.is(either(even, gt5)(4), true)
  t.is(either(even, gt5)(42), true)
})

test('should return the result of the second function if the result of the first is not truthy', t => {
  t.is(either(even, gt5)(43), true)
  t.is(either(even, gt5)(7), true)
})

test('should return false if neither function returns a truthy value', t => {
  t.is(either(even, gt5)(3), false)
  t.is(either(even, gt5)(1), false)
})

test('should accept multiple arguments', t => {
  t.is(either(multiply, divide)(4, 2), 8)
  t.is(either(multiply, divide)(0, 2), 0)
  t.true(Number.isNaN(either(multiply, divide)(0, 0)))
})

test('should be curried', t => {
  const isString = (a) => type(a) === 'string'
  const isNumber = (a) => type(a) === 'number'
  const eitherStringOr = either(isString)

  t.is(eitherStringOr(isNumber)('a'), true)
  t.is(eitherStringOr(isNumber)({}), false)
})
