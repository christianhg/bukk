import curry from './curry'
import kind from './kind'

const all = (p, a) => {
  const m = {
    'Array': () => a.every(p),
    'Map': () => [...a].every(([key, value]) => p(value)),
    'Object': () => Object.keys(a).every((x) => p(a[x])),
    'Set': () => [...a].every(p),
    'String': () => [...a].every(p),
    '*': () => false
  }
  return (m[kind(a)] || m['*'])()
}

export default curry(all)
