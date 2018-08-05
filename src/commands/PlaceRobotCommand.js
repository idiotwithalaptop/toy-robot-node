const utils = require('../utils')
const Robot = require('../model/Robot')
const Table = require('../model/Table')

function run (robot, table, args) {
  let validationResult = validate(robot, table, args)

  if (validationResult) {
    let x = Number.parseInt(args.x)
    let y = Number.parseInt(args.y)
    let direction = args.direction
    robot.place(x, y, direction)
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
  result = result && utils.isNotNullOrUndefined(args.x)
  result = result && utils.isIntegerString(args.x)
  result = result && utils.isNotNullOrUndefined(args.y)
  result = result && utils.isIntegerString(args.y)
  result = result && utils.isNotNullOrUndefined(args.direction)

  if (result) {
    let x = Number.parseInt(args.x)
    let y = Number.parseInt(args.y)
    result = result && x >= 0 && x < table.width
    result = result && y >= 0 && y < table.height
  }

  return result
}

module.exports = {
  run
}
