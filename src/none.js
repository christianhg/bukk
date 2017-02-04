import curry from './curry'
import type from './type'

const none = (p, a) => {
  const m = {
    'Array': () => !a.some(p),
    'Boolean': () => !p(a),
    'Map': () => ![...a].some(([key, value]) => p(value)),
    'Number': () => !p(a),
    'Object': () => !Object.keys(a).some((x) => p(a[x])),
    'Set': () => none(p, [...a]),
    'String': () => none(p, [...a]),
    '*': () => false
  }
  return (m[type(a)] || m['*'])()
}

export default curry(none)
