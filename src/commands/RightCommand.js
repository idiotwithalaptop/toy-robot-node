/*
 * Author: Ryan Brown
 *
 * Right Command module, used to issue the turn right command to the robot.
 */
const utils = require('../utils')
const Robot = require('../model/Robot')
const Table = require('../model/Table')

function run (robot, table, args) {
  let validationResult = validate(robot, table)

  if (validationResult) {
    robot.turnRight()
  } else {
    console.error('Right command failed validation Right{robot: %o, table: %o', robot, table)
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
