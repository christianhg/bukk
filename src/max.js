import curry from './curry'
import kind from './kind'

const max = (a, b) => {
  const m = {
    'Number': () => b > a
      ? b
      : a,
    '*': () => undefined
  }

  return ((kind(a) === kind(b) && m[kind(a)]) || m['*'])()
}

export default curry(max)
