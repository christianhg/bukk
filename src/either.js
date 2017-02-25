import curry from './curry'

const either = (f, g) =>
  (...args) =>
    f.apply(undefined, args) || g.apply(undefined, args)

export default curry(either)
