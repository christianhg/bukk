import curry from './curry'
import type from './type'

const any = (p, a) => {
  const m = {
    'Array': () => a.some(p),
    'Boolean': () => p(a),
    'Map': () => Array.from(a).some(([key, value]) => p(value)),
    'Number': () => p(a),
    'Object': () => Object.keys(a).some((x) => p(a[x])),
    'Set': () => any(p, [...a]),
    'String': () => any(p, [...a]),
    '*': () => false
  }
  return (m[type(a)] || m['*'])()
}

export default curry(any)
