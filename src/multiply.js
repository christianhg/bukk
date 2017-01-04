const curry = require('./curry')

const multiply = (a, b) =>
  a * b

module.exports = curry(multiply)
