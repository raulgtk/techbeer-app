export const checkVersion = version => {
  if (typeof version !== 'number') {
    throw new Error("ERR: Version must be a number")
  }
}