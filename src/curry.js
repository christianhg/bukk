const curry = (f, received = [], arity = f.length) =>
  arity <= 0
    ? f.apply(undefined, received)
    : (...args) =>
      curry(f, [...received, ...args], arity - args.length)

export default curry
