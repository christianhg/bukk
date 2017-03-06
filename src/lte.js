import curry from './curry'
import kind from './kind'

const lte = (a, b) => {
  const m = {
    'Number': () => a <= b,
    '*': () => undefined
  }

  return ((kind(a) === kind(b) && m[kind(a)]) || m['*'])()
}

export default curry(lte)
