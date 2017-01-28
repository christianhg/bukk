import curry from './curry'
import slice from './slice'

const take = (n, a) =>
  n > 0
    ? slice(0, n, a)
    : slice(0, 0, a)

export default curry(take)
