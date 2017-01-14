const type = require('./type')

const trim = a => {
  const m = {
    String: () => a.trim(),
    '*': () => a
  }

  return (m[type(a)] || m['*'])()
}

module.exports = trim
