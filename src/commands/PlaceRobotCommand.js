const utils = require('../utils')
const Robot = require('../model/Robot')
const Table = require('../model/Table')

function run (robot, table, args) {
  let validationResult = validate(robot, table, args)

  if (validationResult) {
    let [x, y, direction] = args
    robot.place(Number.parseInt(x), Number.parseInt(y), direction)
  } else {
    console.error('Place command failed validation PlaceCommand{robot: %o, table: %o, args: \'%s\'}', robot, table, JSON.stringify(args))
  }
}

function validate (robot, table, args) {
  let result = true

  // validate robot
  result = result && utils.isNotNullOrUndefined(robot)
  result = result && robot instanceof Robot

  // validate table
  result = result && utils.isNotNullOrUndefined(table)
  result = result && table instanceof Table

  // validate args
  result = result && utils.isNotNullOrUndefined(args)
  result = result && args.length === 3
  if (result) {
    let [x, y, direction] = args
    result = result && utils.isNotNullOrUndefined(x)
    result = result && utils.isIntegerString(x)
    result = result && utils.isNotNullOrUndefined(y)
    result = result && utils.isIntegerString(y)
    result = result && utils.isNotNullOrUndefined(direction)
    result = result && x >= 0 && x < table.width
    result = result && y >= 0 && y < table.height
  }

  return result
}

module.exports = {
  run
}
