const curry = require('./curry')
const slice = require('./slice')

const take = (n, a) => n > 0
  ? slice(0, n, a)
  : slice(0, 0, a)

module.exports = curry(take)
