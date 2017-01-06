const curry = require('./curry')

const all = (p, xs) =>
  xs.every(p)

module.exports = curry(all)
