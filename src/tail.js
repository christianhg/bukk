const slice = require('./slice')

module.exports = tail = xs =>
  slice(1, xs.length, xs)
