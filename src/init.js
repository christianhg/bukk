import slice from './slice'

const init = xs =>
  slice(0, xs.length - 1, xs)

export default init
