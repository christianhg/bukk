const curry = require('./curry')

const type = a =>
  Object.prototype.toString.call(a).slice(8, -1)

module.exports = curry(type)
