import kind from './kind'

const flatten = a => {
  const m = {
    'Array': () => a.reduce((b, x) =>
      kind(x) === 'Array'
        ? [...b, ...flatten(x)]
        : [...b, x], []),
    '*': () => a
  }

  return (m[kind(a)] || m['*'])()
}

export default flatten
