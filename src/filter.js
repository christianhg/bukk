import curry from './curry'
import type from './type'

const filter = (p, a) => {
  const m = {
    'Map': () => new Map(Array.from(a).filter(([key, value]) => p(value))),
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

  return type(a.filter) === 'Function'
    ? a.filter(p)
    : (m[type(a)] || m['*'])()
}

export default curry(filter)
