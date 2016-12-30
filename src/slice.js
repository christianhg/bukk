const curry = require('./curry')

const slice = (from, to, xs) =>
  xs.slice(from, to)

module.exports = curry(slice)
