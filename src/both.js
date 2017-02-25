import curry from './curry'

const both = (f, g) =>
  (...args) =>
    f.apply(undefined, args) && g.apply(undefined, args)

export default curry(both)
