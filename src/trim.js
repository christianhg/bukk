import kind from './kind'

const trim = a => {
  const m = {
    String: () => a.trim(),
    '*': () => a
  }

  return (m[kind(a)] || m['*'])()
}

export default trim
