/* global describe, it, beforeEach */
const command = require('../../src/commands/RightCommand')
const Robot = require('../../src/model/Robot')
const Table = require('../../src/model/Table')
const expect = require('chai').expect

describe('RightCommand', function () {
  let robot = null
  let table = null
  beforeEach(function () {
    robot = new Robot()
    table = new Table(5, 5)
  })

  describe('run()', function () {
    describe('Before robot placement', function () {
      it('should not turn robot', function () {
        command.run(robot, table)
        expect(robot.direction).to.equal(null)
      })
      it('should not place the robot', function () {
        command.run(robot, table)
        expect(robot.isPlaced()).to.equal(false)
      })
    })

    describe('After robot placed and facing east', function () {
      beforeEach(function () {
        robot.place(1, 1, 'EAST')
      })

      it('should turn to the SOUTH', function () {
        command.run(robot, table)
        expect(robot.direction.name).to.equal('SOUTH')
      })

      it('should not have moved', function () {
        let xBefore = robot.x
        let yBefore = robot.y

        command.run(robot, table)

        expect(robot.x).to.equal(xBefore)
        expect(robot.y).to.equal(yBefore)
      })
    })
  })
})
