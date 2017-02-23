import curry from './curry'
import kind from './kind'

const any = (p, a) => {
  const m = {
    'Array': () => a.some(p),
    'Boolean': () => p(a),
    'Map': () => [...a].some(([key, value]) => p(value)),
    'Object': () => Object.keys(a).some((x) => p(a[x])),
    'Set': () => [...a].some(p),
    'String': () => [...a].some(p),
    '*': () => false
  }
  return (m[kind(a)] || m['*'])()
}

export default curry(any)
