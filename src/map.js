const curry = require('./curry')
const type = require('./type')

const map = (f, a) => {
  const m = {
    'Array': () => a.map(f),
    'Map': () => new Map(Array.from(a).map(([key, value]) => [key, f(value)])),
    'Object': () => Object.keys(a).reduce((b, key) => {
      b[key] = f(a[key])
      return b
    }, {}),
    'Set': () => new Set([...a].map(f)),
    '*': () => f(a)
  }
  return (m[type(a)] || m['*'])()
}

module.exports = curry(map)
