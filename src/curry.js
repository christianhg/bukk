const curry = (f, recieved = [], arity = f.length) =>
  arity <= 0
    ? f.apply(undefined, recieved)
    : (...args) =>
      curry(f, [...recieved, ...args], arity - args.length)

export default curry
