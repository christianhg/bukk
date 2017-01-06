const curry = require('./curry')
const type = require('./type')

const any = (p, a) =>
  ({
    'Array': () => a.some(p),
    'Boolean': () => false,
    'Map': () => Array.from(a).some(([key, value]) => p(value)),
    'Null': () => false,
    'Number': () => false,
    'Object': () => Object.keys(a).some((x) => p(a[x])),
    'Set': () => [...a].some(p),
    'String': () => a.split('').some(c => p(c)),
    'Symbol': () => false,
    'Undefined': () => false
  }[type(a)]())

module.exports = curry(any)
