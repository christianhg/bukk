import curry from './curry'
import kind from './kind'

const merge = (a, b) => {
  const m = {
    'Object': () => ({...a, ...b}),
    '*': () => undefined
  }

  return ((kind(a) === kind(b) && m[kind(a)]) || m['*'])()
}

export default curry(merge)
