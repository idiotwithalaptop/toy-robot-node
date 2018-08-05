/* global describe, it, beforeEach */
const command = require('../../src/commands/MoveCommand')
const Robot = require('../../src/model/Robot')
const Table = require('../../src/model/Table')
const expect = require('chai').expect

describe('MoveCommand', function () {
  let robot = null
  let table = null
  beforeEach(function () {
    robot = new Robot()
    table = new Table(5, 5)
  })

  describe('run()', function () {
    describe('Before robot placement', function () {
      it('should not move robot', function () {
        command.run(robot, table)
        expect(robot.x).to.equal(null)
        expect(robot.y).to.equal(null)
      })
      it('should not place the robot', function () {
        command.run(robot, table)
        expect(robot.isPlaced()).to.equal(false)
      })
    })

    describe('After robot placed at (1,1) and facing NORTH', function () {
      beforeEach(function () {
        robot.place(1, 1, 'NORTH')
      })

      it('should still be pointing north', function () {
        command.run(robot, table)
        expect(robot.direction.name).to.equal('NORTH')
      })

      it('should have moved 1 place on the y axis', function () {
        let xBefore = robot.x
        let yBefore = robot.y

        command.run(robot, table)

        expect(robot.x).to.equal(xBefore)
        expect(robot.y).to.equal(yBefore + 1)
      })
    })

    describe('After robot placed at (1,1) and facing WEST', function () {
      beforeEach(function () {
        robot.place(1, 1, 'WEST')
      })

      it('should still be pointing west', function () {
        command.run(robot, table)
        expect(robot.direction.name).to.equal('WEST')
      })

      it('should have moved -1 place on the x axis', function () {
        let xBefore = robot.x
        let yBefore = robot.y

        command.run(robot, table)

        expect(robot.x).to.equal(xBefore - 1)
        expect(robot.y).to.equal(yBefore)
      })
    })

    describe('After robot placed at 0,0 and facing WEST', function () {
      beforeEach(function () {
        robot.place(0, 0, 'WEST')
      })

      it('should still be pointing west', function () {
        command.run(robot, table)
        expect(robot.direction.name).to.equal('WEST')
      })

      it('should not have moved', function () {
        let xBefore = robot.x
        let yBefore = robot.y

        command.run(robot, table)

        expect(robot.x).to.equal(xBefore)
        expect(robot.y).to.equal(yBefore)
      })
    })

    describe('After robot placed at 0,0 and facing SOUTH', function () {
      beforeEach(function () {
        robot.place(0, 0, 'SOUTH')
      })

      it('should still be pointing south', function () {
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
