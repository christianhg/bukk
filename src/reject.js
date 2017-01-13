const curry = require('./curry')
const type = require('./type')

const reject = (p, a) => {
  const m = {
    'Array': () => [...a].filter(x => !p(x)),
    'Map': () => new Map(Array.from(a).filter(([key, value]) => !p(value))),
    'Object': () => Object.keys(a).reduce((b, key) => {
      if (!p(a[key])) {
        b[key] = a[key]
      }
      return b
    }, {}),
    'Set': () => new Set(reject(p, [...a])),
    'String': () => reject(p, [...a]).join(''),
    '*': () => a
  }

  return (m[type(a)] || m['*'])()
}

module.exports = curry(reject)
