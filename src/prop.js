import curry from './curry'
import kind from './kind'

const prop = (p, o) => {
  const m = {
    'Object': () => o[p],
    '*': () => undefined
  }

  return (m[kind(o)] || m['*'])()
}

export default curry(prop)
