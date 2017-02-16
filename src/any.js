import curry from './curry'
import kind from './kind'

const any = (p, a) => {
  const m = {
    'Array': () => a.some(p),
    'Boolean': () => p(a),
    'Map': () => [...a].some(([key, value]) => p(value)),
    'Number': () => p(a),
    'Object': () => Object.keys(a).some((x) => p(a[x])),
    'Set': () => any(p, [...a]),
    'String': () => any(p, [...a]),
    '*': () => false
  }
  return (m[kind(a)] || m['*'])()
}

export default curry(any)
