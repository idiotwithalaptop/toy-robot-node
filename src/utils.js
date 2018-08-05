/*
 * Author: Ryan Brown
 *
 * Common utility module.  Used as a place to refactor commonly used code into generic functions.
 */
const _integerRegex = /^-?\d+$/

function isNullOrUndefined (obj) {
  return obj === null || obj === undefined
}

function isNotNullOrUndefined (obj) {
  return !isNullOrUndefined(obj)
}

function isIntegerString (str) {
  return typeof (str) === 'string' && _integerRegex.test(str)
}

module.exports = {
  isNullOrUndefined,
  isNotNullOrUndefined,
  isIntegerString
}
