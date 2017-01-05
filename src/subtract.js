const curry = require('./curry')

const subtract = (a, b) =>
  a - b

module.exports = curry(subtract)
