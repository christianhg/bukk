import slice from './slice'

const tail = xs =>
  slice(1, xs.length, xs)

export default tail
