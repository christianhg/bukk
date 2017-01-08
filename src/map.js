const curry = require('./curry')
const type = require('./type')

const map = (f, a) => {
  const m = {
    'Map': () => new Map(Array.from(a).map(([key, value]) => [key, f(value)])),
    'Object': () => Object.keys(a).reduce((b, key) => {
      b[key] = f(a[key])
      return b
    }, {}),
    'Set': () => new Set([...a].map(f)),
    '*': () => f(a)
  }

  return type(a.map) === 'Function'
    ? a.map(f)
    : (m[type(a)] || m['*'])()
}

module.exports = curry(map)
