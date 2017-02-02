import type from './type'

const last = a => {
  const m = {
    'Array': () => a[a.length - 1],
    'Map': () => Array.from(a)[a.size - 1],
    'Set': () => [...a][a.size - 1],
    'String': () => [...a][a.length - 1],
    '*': () => undefined
  }

  return (m[type(a)] || m['*'])()
}

export default last
