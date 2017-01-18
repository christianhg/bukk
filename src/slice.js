const curry = require('./curry')
const type = require('./type')

const slice = (from, to, a) => {
  const m = {
    'Array': () => a.slice(from, to),
    'String': () => a.slice(from, to),
    '*': () => a
  }

  return (m[type(a)] || m['*'])()
}

module.exports = curry(slice)
