const curry = require('./curry')
const type = require('./type')

const equals = (a, b) =>
({
  'Array': () => a.length === b.length &&
    a.every((x, i) => equals(x, b[i])),
  'Boolean': () => a === b,
  'Map': () => a.size === b.size &&
    equals(Array.from(a), Array.from(b)),
  'Null': () => a === b,
  'Number': () => a === b,
  'Object': () => Object.keys(a).length === Object.keys(b).length &&
    Object.keys(a).every(x => equals(a[x], b[x])),
  'Set': () => a.size === b.size &&
    equals(Array.from(a), Array.from(b)),
  'String': () => a === b,
  'Symbol': () => a === b,
  'Undefined': () => a === b
}[type(a)]())

module.exports = curry(equals)
