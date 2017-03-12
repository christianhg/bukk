import curry from './curry'
import kind from './kind'

const concat = (a, b) => {
  const m = {
    'Array': () => [...a, ...b],
    'Map': () => new Map([...a, ...b]),
    'Set': () => new Set([...a, ...b]),
    'String': () => `${a}${b}`,
    '*': () => undefined
  }

  return ((kind(a) === kind(b) && m[kind(a)]) || m['*'])()
}

export default curry(concat)
