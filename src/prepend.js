import curry from './curry'
import kind from './kind'

const prepend = (x, xs) => {
  const m = {
    'Array': () => [x, ...xs],
    'Map': () => new Map([x, ...xs]),
    'Set': () => new Set([x, ...xs]),
    'String': () => `${x}${xs}`,
    '*': () => xs
  }

  return (m[kind(xs)] || m['*'])()
}

export default curry(prepend)
