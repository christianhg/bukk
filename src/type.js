const type = (a) =>
  typeof a === 'object'
    ? !a
      ? 'null'
      : 'object'
    : typeof a

export default type
