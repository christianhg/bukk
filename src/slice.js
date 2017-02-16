import curry from './curry'
import kind from './kind'

const slice = (from, to, a) => {
  const m = {
    'Array': () => a.slice(from, to),
    'Map': () => new Map([...a].slice(from, to)),
    'Set': () => new Set([...a].slice(from, to)),
    'String': () => a.slice(from, to),
    '*': () => undefined
  }

  return (m[kind(a)] || m['*'])()
}

export default curry(slice)
