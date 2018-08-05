const utils = require('../utils')
const Robot = require('../model/Robot')
const Table = require('../model/Table')

function run (robot, table, args) {
  let validationResult = validate(robot, table, args)

  if (validationResult) {
    let [ outputStream ] = args
    outputStream.write('' + robot.x + ',' + robot.y + ',' + robot.direction.name + '\n\r')
  } else {
    console.error('Report command failed validation Report{robot: %o, table: %o, args: \'%s\'}', robot, table, JSON.stringify(args))
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
  result = result && args.length === 1
  result = result && utils.isNotNullOrUndefined(args[0])

  return result
}

module.exports = {
  run
}
