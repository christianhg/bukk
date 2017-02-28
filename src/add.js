import curry from './curry'
import kind from './kind'

const add = (a, b) => {
  const m = {
    'Number': () => a + b,
    '*': () => NaN
  }

  return ((kind(a) === kind(b) && m[kind(a)]) || m['*'])()
}

export default curry(add)
