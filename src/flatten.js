import kind from './kind'

const flatten = a =>
  a.reduce((b, x) =>
    kind(x) === 'Array'
      ? [...b, ...flatten(x)]
      : [...b, x], [])

export default flatten
