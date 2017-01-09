const curry = require('./curry')

const divide = (a, b) =>
  a / b

module.exports = curry(divide)
