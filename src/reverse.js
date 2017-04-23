import curry from './curry'
import kind from './kind'

const reverse = (a) => {
  const m = {
    'Array': () => [...a].reverse(),
    'Map': () => new Map([...a].reverse()),
    'Set': () => new Set([...a].reverse()),
    'String': () => [...a].reverse().join(''),
    '*': () => a
  }

  return (m[kind(a)] || m['*'])()
}

export default curry(reverse)
