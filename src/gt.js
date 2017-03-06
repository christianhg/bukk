import curry from './curry'
import kind from './kind'

const gt = (a, b) => {
  const m = {
    'Number': () => a > b,
    '*': () => undefined
  }

  return ((kind(a) === kind(b) && m[kind(a)]) || m['*'])()
}

export default curry(gt)
