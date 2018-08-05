/* global describe, it, beforeEach */
const command = require('../../src/commands/ReportCommand')
const Robot = require('../../src/model/Robot')
const Table = require('../../src/model/Table')
const expect = require('chai').expect
const StringWritable = require('../StringWritable')

describe('ReportCommand', function () {
  let robot = null
  let table = null
  beforeEach(function () {
    robot = new Robot()
    table = new Table(5, 5)
  })

  describe('run()', function () {
    describe('Before robot placement', function () {
      it('should not have written to stream', function () {
        const streamOut = new StringWritable()
        command.run(robot, table, {outputStream: streamOut})
        streamOut.end()
        expect(streamOut.data.length).to.equal(0)
      })
    })

    describe('After robot placement', function () {
      beforeEach(function () {
        robot.place(1, 3, 'NORTH')
      })

      it('should have written to stream', function () {
        const streamOut = new StringWritable()
        command.run(robot, table, {outputStream: streamOut})
        streamOut.end()
        expect(streamOut.data).to.equal('1,3,NORTH\n\r')
      })
    })
  })
})
