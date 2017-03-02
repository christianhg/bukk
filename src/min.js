import curry from './curry'
import kind from './kind'

const min = (a, b) => {
  const m = {
    'Number': () => b < a
      ? b
      : a,
    '*': () => undefined
  }

  return ((kind(a) === kind(b) && m[kind(a)]) || m['*'])()
}

export default curry(min)
