const _pipe = require('./_pipe')
const head = require('./head')
const tail = require('./tail')

module.exports = pipe = (...fs) =>
  (...args) =>
    _pipe(tail(fs), head(fs).apply(undefined, args))
