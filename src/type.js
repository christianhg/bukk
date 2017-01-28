import curry from './curry'

const type = a =>
  Object.prototype.toString.call(a).slice(8, -1)

export default curry(type)
