import curry from './curry'
import type from './type'

const prepend = (x, xs) => {
  const m = {
    'Array': () => [x, ...xs],
    'Map': () => new Map([x, ...xs]),
    'Set': () => new Set([x, ...xs]),
    'String': () => `${x}${xs}`,
    '*': () => xs
  }

  return (m[type(xs)] || m['*'])()
}

export default curry(prepend)
