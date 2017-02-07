import curry from './curry'
import type from './type'

const append = (x, xs) => {
  const m = {
    'Array': () => [...xs, x],
    'Map': () => new Map([...xs, x]),
    'Set': () => new Set([...xs, x]),
    'String': () => `${xs}${x}`,
    '*': () => xs
  }

  return (m[type(xs)] || m['*'])()
}

export default curry(append)
