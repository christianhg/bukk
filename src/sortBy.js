import curry from './curry'
import kind from './kind'

const compare = curry((f, a, b) => f(a) < f(b) ? -1 : f(a) > f(b) ? 1 : 0)

const sortBy = (f, a) => {
  const compareToF = compare(f)

  const m = {
    'Array': () => [...a].sort(compareToF),
    'Map': () => new Map([...a].sort(compareToF)),
    'Set': () => new Set([...a].sort(compareToF)),
    '*': () => a
  }

  return (m[kind(a)] || m['*'])()
}

export default curry(sortBy)
