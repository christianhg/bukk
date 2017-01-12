const type = require('./type')

const head = a => {
  const m = {
    'Array': () => a[0],
    'Map': () => Array.from(a)[0],
    'Object': () => a[head(Object.keys(a))],
    'Set': () => [...a][0],
    'String': () => [...a][0],
    '*': () => undefined
  }

  return (m[type(a)] || m['*'])()
}

module.exports = head
