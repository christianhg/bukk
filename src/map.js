const curry = require('./curry')
const type = require('./type')

const map = (f, a) =>
  ({
    'Array': () => a.map(f),
    'Boolean': () => f(a),
    'Map': () => new Map(Array.from(a).map(([key, value]) => [key, f(value)])),
    'Null': () => null,
    'Number': () => f(a),
    'Object': () => Object.keys(a).reduce((b, key) => {
      b[key] = f(a[key])
      return b
    }, {}),
    'Set': () => new Set([...a].map(f)),
    'String': () => f(a),
    'Symbol': () => a,
    'Undefined': () => undefined
  }[type(a)]())

module.exports = curry(map)
