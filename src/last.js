import kind from './kind'

const last = a => {
  const m = {
    'Array': () => a[a.length - 1],
    'Map': () => [...a][a.size - 1],
    'Set': () => [...a][a.size - 1],
    'String': () => [...a][a.length - 1],
    '*': () => undefined
  }

  return (m[kind(a)] || m['*'])()
}

export default last
