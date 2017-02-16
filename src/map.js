import curry from './curry'
import kind from './kind'

const map = (f, a) => {
  const m = {
    'Map': () => new Map([...a].map(([key, value]) => [key, f(value)])),
    'Object': () => Object.keys(a).reduce((b, key) => {
      b[key] = f(a[key])
      return b
    }, {}),
    'Set': () => new Set([...a].map(f)),
    '*': () => f(a)
  }

  return kind(a.map) === 'Function'
    ? a.map(f)
    : (m[kind(a)] || m['*'])()
}

export default curry(map)
