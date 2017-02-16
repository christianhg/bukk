import curry from './curry'

const kind = a =>
  Object.prototype.toString.call(a).slice(8, -1)

export default curry(kind)
