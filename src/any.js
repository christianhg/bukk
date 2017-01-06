const curry = require('./curry')

const any = (p, xs) =>
  xs.some(p)

module.exports = curry(any)
