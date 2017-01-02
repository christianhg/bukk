const curry = require('./curry')
const slice = require('./slice')

const type = a =>
  slice(8, -1, Object.prototype.toString.call(a))

  module.exports = curry(type)
