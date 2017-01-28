import type from './type'

const trim = a => {
  const m = {
    String: () => a.trim(),
    '*': () => a
  }

  return (m[type(a)] || m['*'])()
}

export default trim
