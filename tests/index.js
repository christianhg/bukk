import test from 'ava'

import B from '../'
import type from '../src/type'

test('should export add', t => {
  t.is(type(B.add), 'Function')
})

test('should export and', t => {
  t.is(type(B.and), 'Function')
})

test('should export compose', t => {
  t.is(type(B.compose), 'Function')
})

test('should export curry', t => {
  t.is(type(B.curry), 'Function')
})

test('should export B.flatten', t => {
  t.is(type(B.flatten), 'Function')
})

test('should export gt', t => {
  t.is(type(B.gt), 'Function')
})

test('should export gte', t => {
  t.is(type(B.gte), 'Function')
})

test('should export head', t => {
  t.is(type(B.head), 'Function')
})

test('should export lt', t => {
  t.is(type(B.lt), 'Function')
})

test('should export lte', t => {
  t.is(type(B.lte), 'Function')
})

test('should export map', t => {
  t.is(type(B.map), 'Function')
})

test('should export B.multiply', t => {
  t.is(type(B.multiply), 'Function')
})

test('should export or', t => {
  t.is(type(B.or), 'Function')
})

test('should export pipe', t => {
  t.is(type(B.pipe), 'Function')
})

test('should export B.range', t => {
  t.is(type(B.range), 'Function')
})

test('should export slice', t => {
  t.is(type(B.slice), 'Function')
})

test('should export B.subtract', t => {
  t.is(type(B.subtract), 'Function')
})

test('should export tail', t => {
  t.is(type(B.tail), 'Function')
})

test('should export type', t => {
  t.is(type(B.type), 'Function')
})
