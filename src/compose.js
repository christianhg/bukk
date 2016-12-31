const _pipe = require('./_pipe')
const head = require('./head')
const tail = require('./tail')

module.exports = compose = (...fs) =>
  (...args) =>
    _pipe(tail(fs.reverse()), head(fs.reverse()).apply(undefined, args))
