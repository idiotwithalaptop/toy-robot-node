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
