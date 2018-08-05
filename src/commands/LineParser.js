/*
 * Author: Ryan Brown
 *
 * Line Parser module, accepts an input stream, parses & validates the input into commands,
 * issues those commands using a simple command pattern.
 * Used to read stream of commands from keyboard or file.
 *
 * Line parser's parse function returns a Promise to provide callers with a simple way to
 * react to success and failures.
 */
const readline = require('readline')
const utils = require('../utils')

const commandMap = {
  LEFT: require('./LeftCommand'),
  RIGHT: require('./RightCommand'),
  MOVE: require('./MoveCommand'),
  PLACE: require('./PlaceRobotCommand'),
  REPORT: require('./ReportCommand')
}
const commandRegex = /^(LEFT|RIGHT|MOVE|REPORT|PLACE \d+,\d+,(NORTH|EAST|SOUTH|WEST))$/

function parse (inputStream, robot, table) {
  return new Promise(function (resolve, reject) {
    try {
      const lines = readline.createInterface({
        input: inputStream
      })
      let successfulCommands = 0

      lines.on('line', function (line) {
        if (commandRegex.test(line)) {
          let [ commandName, argStr ] = line.split(' ')
          let args = null
          if (utils.isNotNullOrUndefined(argStr)) {
            args = argStr.split(',')
          }
          commandMap[commandName].run(robot, table, args)
          successfulCommands++
        }
      })

      lines.on('SIGINT', function () {
        resolve(successfulCommands)
      })

      lines.on('close', function () {
        resolve(successfulCommands)
      })
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = {
  parse
}
