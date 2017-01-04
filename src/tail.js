const slice = require('./slice')

const tail = xs =>
  slice(1, xs.length, xs)

module.exports = tail
