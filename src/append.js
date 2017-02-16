import curry from './curry'
import kind from './kind'

const append = (x, xs) => {
  const m = {
    'Array': () => [...xs, x],
    'Map': () => new Map([...xs, x]),
    'Set': () => new Set([...xs, x]),
    'String': () => `${xs}${x}`,
    '*': () => xs
  }

  return (m[kind(xs)] || m['*'])()
}

export default curry(append)
