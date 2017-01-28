import type from './type'

const flatten = a =>
  a.reduce((b, x) =>
    type(x) === 'Array'
      ? [...b, ...flatten(x)]
      : [...b, x], [])

export default flatten
