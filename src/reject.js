import curry from './curry'
import type from './type'

const reject = (p, a) => {
  const m = {
    'Array': () => [...a].filter(x => !p(x)),
    'Map': () => new Map([...a].filter(([key, value]) => !p(value))),
    'Object': () => Object.keys(a).reduce((b, key) => {
      if (!p(a[key])) {
        b[key] = a[key]
      }
      return b
    }, {}),
    'Set': () => new Set(reject(p, [...a])),
    'String': () => reject(p, [...a]).join(''),
    '*': () => a
  }

  return (m[type(a)] || m['*'])()
}

export default curry(reject)
