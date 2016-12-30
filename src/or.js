const curry = require('./curry')

const or = (a, b) => a || b

module.exports = curry(or)
