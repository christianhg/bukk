import curry from './curry'
import type from './type'

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
  return (m[type(a)] || m['*'])()
}

export default curry(all)
