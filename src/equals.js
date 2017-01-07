const curry = require('./curry')
const type = require('./type')

const equals = (a, b) => {
  const m = {
    'Array': () => a.length === b.length &&
      a.every((x, i) => equals(x, b[i])),
    'Date': () => a.getTime() === b.getTime(),
    'Map': () => a.size === b.size &&
      equals(Array.from(a), Array.from(b)),
    'Object': () => Object.keys(a).length === Object.keys(b).length &&
      Object.keys(a).every(x => equals(a[x], b[x])),
    'Set': () => a.size === b.size &&
      equals(Array.from(a), Array.from(b)),
    '*': () => a === b
  }
  return (m[type(a)] || m['*'])()
}

module.exports = curry(equals)
