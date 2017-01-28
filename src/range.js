import add from './add'
import curry from './curry'
import subtract from './subtract'

const range = (from, to) =>
  Array.apply(0, Array(subtract(to, from)))
    .map((x, i) => add(from, i))

export default curry(range)
