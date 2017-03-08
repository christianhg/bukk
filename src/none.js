import curry from './curry'
import kind from './kind'

const none = (p, a) => {
  const m = {
    'Array': () => !a.some(p),
    'Map': () => ![...a].some(([key, value]) => p(value)),
    'Object': () => !Object.keys(a).some((x) => p(a[x])),
    'Set': () => none(p, [...a]),
    'String': () => none(p, [...a]),
    '*': () => undefined
  }

  return (m[kind(a)] || m['*'])()
}

export default curry(none)
