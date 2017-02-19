import curry from './curry'
import kind from './kind'

const zip = (xs, ys) => {
  const m = {
    'Array': () => xs
      .map((x, i) => [xs[i], ys[i]])
      .filter(xy => xy[0] && xy[1]),
    '*': () => undefined
  }

  return ((kind(xs) === kind(ys) && m[kind(xs)]) || m['*'])()
}

export default curry(zip)
