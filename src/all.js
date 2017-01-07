const curry = require('./curry')
const type = require('./type')

const all = (p, a) => {
  const m = {
    'Array': () => a.every(p),
    'Map': () => Array.from(a).every(([key, value]) => p(value)),
    'Object': () => Object.keys(a).every((x) => p(a[x])),
    'Set': () => all(p, [...a]),
    'String': () => all(p, [...a]),
    '*': () => false
  }
  return (m[type(a)] || m['*'])()
}

module.exports = curry(all)
