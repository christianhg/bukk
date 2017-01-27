const init = require('./init')
const last = require('./last')

const _compose = (fs, result) =>
  fs.length === 0
    ? result
    : _compose(init(fs), last(fs)(result))

const compose = (...fs) =>
  (...args) =>
    _compose(init(fs), last(fs).apply(undefined, args))

module.exports = compose
