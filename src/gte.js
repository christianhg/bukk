import curry from './curry'
import kind from './kind'

const gte = (a, b) => {
  const m = {
    'Number': () => a >= b,
    '*': () => undefined
  }

  return ((kind(a) === kind(b) && m[kind(a)]) || m['*'])()
}

export default curry(gte)
