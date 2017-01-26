const slice = require('./slice')

const init = xs =>
  slice(0, xs.length - 1, xs)

module.exports = init
