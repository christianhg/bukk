import test from 'ava'

import B from '../'

test('should export add', t => {
  t.is(typeof B.add, 'function')
})

test('should export and', t => {
  t.is(typeof B.and, 'function')
})

test('should export compose', t => {
  t.is(typeof B.compose, 'function')
})

test('should export curry', t => {
  t.is(typeof B.curry, 'function')
})

test('should export gt', t => {
  t.is(typeof B.gt, 'function')
})

test('should export gte', t => {
  t.is(typeof B.gte, 'function')
})

test('should export head', t => {
  t.is(typeof B.head, 'function')
})

test('should export lt', t => {
  t.is(typeof B.lt, 'function')
})

test('should export lte', t => {
  t.is(typeof B.lte, 'function')
})

test('should export or', t => {
  t.is(typeof B.or, 'function')
})

test('should export pipe', t => {
  t.is(typeof B.pipe, 'function')
})

test('should export slice', t => {
  t.is(typeof B.slice, 'function')
})

test('should export tail', t => {
  t.is(typeof B.tail, 'function')
})
