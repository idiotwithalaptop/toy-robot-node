const utils = require('../utils')
const Robot = require('../model/Robot')
const Table = require('../model/Table')

function run (robot, table, args) {
  let validationResult = validate(robot, table)

  if (validationResult) {
    robot.turnLeft()
  } else {
    console.error('Left command failed validation Left{robot: %o, table: %o', robot, table)
  }
}

function validate (robot, table) {
  let result = true

  // validate robot
  result = result && utils.isNotNullOrUndefined(robot)
  result = result && robot instanceof Robot

  // validate table
  result = result && utils.isNotNullOrUndefined(table)
  result = result && table instanceof Table

  return result
}

module.exports = {
  run
}
