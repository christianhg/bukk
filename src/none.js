const curry = require('./curry')
const type = require('./type')

const none = (p, a) => {
  const m = {
    'Array': () => !a.some(p),
    'Boolean': () => !p(a),
    'Map': () => !Array.from(a).some(([key, value]) => p(value)),
    'Number': () => !p(a),
    'Object': () => !Object.keys(a).some((x) => p(a[x])),
    'Set': () => none(p, [...a]),
    'String': () => none(p, [...a]),
    '*': () => false
  }
  return (m[type(a)] || m['*'])()
}

module.exports = curry(none)
