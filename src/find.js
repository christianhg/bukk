const curry = require('./curry')
const type = require('./type')

const find = (p, a) => {
  const m = {
    'Array': () => a.find(p),
    'Map': () => Array.from(a).find(([key, value]) => p(value)),
    'Object': () => a[Object.keys(a).find(key => p(a[key]))],
    'Set': () => [...a].find(p),
    'String': () => [...a].find(p),
    '*': () => undefined
  }

  return (m[type(a)] || m['*'])()
}

module.exports = curry(find)
