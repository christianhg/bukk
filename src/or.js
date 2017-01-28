import curry from './curry'

const or = (a, b) =>
  a || b

export default curry(or)
