/* global describe, it, beforeEach */
const command = require('../../src/commands/PlaceRobotCommand')
const Robot = require('../../src/model/Robot')
const Table = require('../../src/model/Table')
const expect = require('chai').expect

describe('PlaceRobotCommand', function () {
  let robot = null
  let table = null
  beforeEach(function () {
    robot = new Robot()
    table = new Table(5, 5)
  })

  describe('run()', function () {
    describe('Validation checks', function () {
      it('Should not perform placement when args are missing', function () {
        command.run(robot, table)
        expect(robot.isPlaced()).to.equal(false)
      })
      it('Should not perform placement when x arg is missing', function () {
        command.run(robot, table, {y: '1', direction: 'NORTH'})
        expect(robot.isPlaced()).to.equal(false)
      })
      it('Should not perform placement when y arg is missing', function () {
        command.run(robot, table, {x: '1', direction: 'NORTH'})
        expect(robot.isPlaced()).to.equal(false)
      })
      it('Should not perform placement when direction is missing', function () {
        command.run(robot, table, {x: '1', y: '1'})
        expect(robot.isPlaced()).to.equal(false)
      })
      it('Should not perform placement when x arg is invalid', function () {
        command.run(robot, table, {x: 'ABC', y: '1', direction: 'NORTH'})
        expect(robot.isPlaced()).to.equal(false)
      })
      it('Should not perform placement when y arg is invalid', function () {
        command.run(robot, table, {x: '1', y: 'XYZ', direction: 'NORTH'})
        expect(robot.isPlaced()).to.equal(false)
      })
      it('Should not perform placement when direction is invalid', function () {
        command.run(robot, table, {x: '1', y: '1', direction: 'KANSAS'})
        expect(robot.isPlaced()).to.equal(false)
      })
      it('Should not perform placement when x is greater than table width', function () {
        command.run(robot, table, {x: (table.width + 1).toString(), y: '1', direction: 'NORTH'})
        expect(robot.isPlaced()).to.equal(false)
      })
      it('Should not perform placement when y is greater than table height', function () {
        command.run(robot, table, {x: '1', y: (table.height + 1).toString(), direction: 'NORTH'})
        expect(robot.isPlaced()).to.equal(false)
      })
    })

    describe('When Arguments are valid', function () {
      const x = 1
      const y = 3
      const direction = 'EAST'
      const args = [x.toString(), y.toString(), direction]
      beforeEach(function () {
        command.run(robot, table, args)
      })

      it('Should perform placement', function () {
        expect(robot.isPlaced()).to.equal(true)
      })

      it('Should have correct x co-ordinate', function () {
        expect(robot.x).to.equal(x)
      })

      it('Should have correct y co-ordinate', function () {
        expect(robot.y).to.equal(y)
      })

      it('Should be facing in the correct direction', function () {
        expect(robot.direction.name).to.equal(direction)
      })
    })
  })
})
