/*
 * Author: Ryan Brown
 *
 * Move Command module, used to issue the move command to the robot.
 */
const utils = require('../utils')
const Robot = require('../model/Robot')
const Table = require('../model/Table')

function run (robot, table, args) {
  let validationResult = validate(robot, table)

  if (validationResult) {
    robot.move(table.width, table.height)
  } else {
    console.error('Move command failed validation Move{robot: %o, table: %o', robot, table)
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
