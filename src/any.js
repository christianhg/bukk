const curry = require('./curry')
const type = require('./type')

const any = (p, a) => {
  const m = {
    'Array': () => a.some(p),
    'Map': () => Array.from(a).some(([key, value]) => p(value)),
    'Object': () => Object.keys(a).some((x) => p(a[x])),
    'Set': () => any(p, [...a]),
    'String': () => any(p, a.split('')),
    '*': () => false
  }
  return (m[type(a)] || m['*'])()
}

module.exports = curry(any)
