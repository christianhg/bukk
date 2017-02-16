import curry from './curry'
import kind from './kind'

const filter = (p, a) => {
  const m = {
    'Map': () => new Map([...a].filter(([key, value]) => p(value))),
    'Object': () => Object.keys(a).reduce((b, key) => {
      if (p(a[key])) {
        b[key] = a[key]
      }
      return b
    }, {}),
    'Set': () => new Set([...a].filter(p)),
    'String': () => [...a].filter(p).join(''),
    '*': () => a
  }

  return kind(a.filter) === 'Function'
    ? a.filter(p)
    : (m[kind(a)] || m['*'])()
}

export default curry(filter)
