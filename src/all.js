import curry from './curry'
import kind from './kind'

const all = (p, a) => {
  const m = {
    'Array': () => a.every(p),
    'Boolean': () => p(a),
    'Map': () => [...a].every(([key, value]) => p(value)),
    'Number': () => p(a),
    'Object': () => Object.keys(a).every((x) => p(a[x])),
    'Set': () => all(p, [...a]),
    'String': () => all(p, [...a]),
    '*': () => false
  }
  return (m[kind(a)] || m['*'])()
}

export default curry(all)
