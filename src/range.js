const add = require('./add')
const curry = require('./curry')
const subtract = require('./subtract')

const range = (from, to) =>
  Array.apply(0, Array(subtract(to, from)))
    .map((x, i) => add(from, i))

module.exports = curry(range)
