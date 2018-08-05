const lineReader = require('./commands/LineParser')
const Robot = require('./model/Robot')
const Table = require('./model/Table')

const robotImpl = new Robot()
const tableImpl = new Table(5, 5)

lineReader.parse(process.stdin, robotImpl, tableImpl)
/* .then(function(noOfCommands) {
            console.log('Thank you for using RB Robot Simulation technology.\n\rTotal Successful Commands: %d', noOfCommands)
          }) */
  .catch(function () {
    console.log('Our apologies but an unexpected error has occurred.  ' +
                        'Please check the error logs to find the cause of this error.')
  })
  .finally(function () {
    process.exit(0)
  })
