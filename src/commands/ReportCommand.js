const utils = require('../utils')
const Robot = require('../model/Robot')
const Table = require('../model/Table')

function run (robot, table, args) {
  let validationResult = validate(robot, table, args)

  if (validationResult) {
    args.outputStream.write('' + robot.x + ',' + robot.y + ',' + robot.direction.name + '\n\r')
  } else {
    console.error('Left command failed validation Left{robot: %o, table: %o', robot, table)
  }
}

function validate (robot, table, args) {
  let result = true

  // validate robot
  result = result && utils.isNotNullOrUndefined(robot)
  result = result && robot instanceof Robot
  result = result && robot.isPlaced()

  // validate table
  result = result && utils.isNotNullOrUndefined(table)
  result = result && table instanceof Table

  // validate args
  result = result && utils.isNotNullOrUndefined(args.outputStream)

  return result
}

module.exports = {
  run
}
