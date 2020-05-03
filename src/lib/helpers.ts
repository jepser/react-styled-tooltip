export const isFunction = (func: any): boolean => {
  if (!func) return false

  return typeof func === 'function'
}
