import curry from './curry'
import kind from './kind'

const find = (p, a) => {
  const m = {
    'Array': () => a.find(p),
    'Map': () => [...a].find(([key, value]) => p(value)),
    'Object': () => a[Object.keys(a).find(key => p(a[key]))],
    'Set': () => [...a].find(p),
    'String': () => [...a].find(p),
    '*': () => undefined
  }

  return (m[kind(a)] || m['*'])()
}

export default curry(find)
