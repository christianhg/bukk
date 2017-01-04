const _pipe = require('./_pipe')
const head = require('./head')
const tail = require('./tail')

const pipe = (...fs) =>
  (...args) =>
    _pipe(tail(fs), head(fs).apply(undefined, args))

module.exports = pipe
