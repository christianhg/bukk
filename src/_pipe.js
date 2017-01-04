const head = require('./head')
const tail = require('./tail')

const _pipe = (fs, result) =>
  fs.length === 0
    ? result
    : _pipe(tail(fs), head(fs)(result))

module.exports = _pipe
