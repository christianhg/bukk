import curry from './curry'
import kind from './kind'

const reduce = (f, i, a) => {
  const m = {
    'Map': () => [...a].reduce((b, [key, value]) => f(b, value), i),
    'Object': () => Object.keys(a).reduce((b, key) => f(b, a[key]), i),
    'Set': () => [...a].reduce(f, i),
    'String': () => [...a].reduce(f, i),
    '*': () => a
  }

  return kind(a.reduce) === 'Function'
    ? a.reduce(f, i)
    : (m[kind(a)] || m['*'])()
}

export default curry(reduce)
