const curry = require('./curry')
const type = require('./type')

const reduce = (f, i, a) => {
  const m = {
    'Map': () => Array.from(a).reduce((b, [key, value]) => f(b, value), i),
    'Object': () => Object.keys(a).reduce((b, key) => f(b, a[key]), i),
    'Set': () => reduce(f, i, [...a]),
    '*': () => a
  }

  return type(a.reduce) === 'Function'
    ? a.reduce(f, i)
    : (m[type(a)] || m['*'])()
}

module.exports = curry(reduce)
