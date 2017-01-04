const type = require('./type')

const flatten = a =>
  a.reduce((b, x) =>
    type(x) === 'Array'
      ? [...b, ...flatten(x)]
      : [...b, x], [])

module.exports = flatten
