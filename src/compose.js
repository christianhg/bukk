const _compose = require('./_compose')
const init = require('./init')
const last = require('./last')

const compose = (...fs) =>
  (...args) =>
    _compose(init(fs), last(fs).apply(undefined, args))

module.exports = compose
