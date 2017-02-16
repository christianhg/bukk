import kind from './kind'

const head = a => {
  const m = {
    'Array': () => a[0],
    'Map': () => [...a][0],
    'Set': () => [...a][0],
    'String': () => [...a][0],
    '*': () => undefined
  }

  return (m[kind(a)] || m['*'])()
}

export default head
