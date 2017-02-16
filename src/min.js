import curry from './curry'

const min = (a, b) =>
  b < a
    ? b
    : a

export default curry(min)
