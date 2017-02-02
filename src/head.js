import type from './type'

const head = a => {
  const m = {
    'Array': () => a[0],
    'Map': () => Array.from(a)[0],
    'Set': () => [...a][0],
    'String': () => [...a][0],
    '*': () => undefined
  }

  return (m[type(a)] || m['*'])()
}

export default head
