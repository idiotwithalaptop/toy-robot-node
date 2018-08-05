/* global describe, it, beforeEach */
const lineParser = require('../../src/commands/LineParser')
const Robot = require('../../src/model/Robot')
const Table = require('../../src/model/Table')
const { expect } = require('chai')
const sinon = require('sinon')
const stream = require('stream')

describe('LineParser', function() {
  let command = ''
  let robot = null;
  let table = null;

  beforeEach(function() {
    table = new Table(5, 5);
    robot = new Robot()
  })

  describe('Robot is not placed', function() {
    beforeEach(function() {
      command = 'PLACE 3,2,WEST'
    })

    describe('PLACE command', function() {
      it('should place the robot', function(){
        let commandStream = new stream.Readable()
        commandStream.push(command)
        commandStream.push(null)
        return lineParser.parse(commandStream, robot, table)
          .finally(function() {
            expect(robot.isPlaced()).to.equal(true)
            expect(robot.x).to.equal(3)
            expect(robot.y).to.equal(2)
            expect(robot.direction.name).to.equal('WEST')
          })
      })
    })

    describe('MOVE command', function() {
      beforeEach(function() {
        command = 'MOVE'
      })

      it('should not move the robot', function() {
        let commandStream = new stream.Readable()
        commandStream.push(command)
        commandStream.push(null)
        return lineParser.parse(commandStream, robot, table)
          .finally(function() {
            expect(robot.x).to.equal(null)
            expect(robot.y).to.equal(null)
            expect(robot.direction).to.equal(null)
            expect(robot.isPlaced()).to.equal(false)
          })
      })
    })
  })

  describe('Robot is placed', function() {
    beforeEach(function() {
      robot.place(1,1,'NORTH')
    })

    describe('LEFT command', function() {
      beforeEach(function() {
        command = 'LEFT'
      })

      it('should turn the robot to the WEST', function() {
        let commandStream = new stream.Readable()
        commandStream.push(command)
        commandStream.push(null)
        return lineParser.parse(commandStream, robot, table)
          .finally(function() {
            expect(robot.direction.name).to.equal('WEST')
          })
      })
    })

    describe('MOVE command', function() {
      beforeEach(function() {
        command = 'MOVE'
      })

      it('should move the robot to (1,2)', function() {
        let commandStream = new stream.Readable()
        commandStream.push(command)
        commandStream.push(null)
        return lineParser.parse(commandStream, robot, table)
          .finally(function() {
            expect(robot.x).to.equal(1)
            expect(robot.y).to.equal(2)
          })
      })
    })

    describe('RIGHT command', function() {
      beforeEach(function() {
        command = 'RIGHT'
      })

      it('should turn the robot to the EAST', function() {
        let commandStream = new stream.Readable()
        commandStream.push(command)
        commandStream.push(null)
        return lineParser.parse(commandStream, robot, table)
          .finally(function() {
            expect(robot.direction.name).to.equal('EAST')
          })
      })
    })

    describe('REPORT command', function() {
      beforeEach(function() {
        command = 'REPORT'
      })

      it('should write to console.log', function() {
        let commandStream = new stream.Readable()
        let spy = sinon.spy(console, 'log')
        commandStream.push(command)
        commandStream.push(null)
        return lineParser.parse(commandStream, robot, table)
          .finally(function() {
            expect(spy.callCount).to.equal(1)
            expect(spy.getCall(0).args[0]).to.equal('%s,%s,%s')
            expect(spy.getCall(0).args[1]).to.equal(1)
            expect(spy.getCall(0).args[2]).to.equal(1)
            expect(spy.getCall(0).args[3]).to.equal('NORTH')
            spy.restore()
          })
      })
    })

    describe('Gibberish command', function() {
      beforeEach(function() {
        command = 'QWERTY'
      })

      it('should have no affect to the robot', function() {
        let xBefore = robot.x
        let yBefore = robot.y
        let directionBefore = robot.direction.name

        let commandStream = new stream.Readable()
        commandStream.push(command)
        commandStream.push(null)
        return lineParser.parse(commandStream, robot, table)
          .finally(function() {
            expect(robot.x).to.equal(xBefore)
            expect(robot.y).to.equal(yBefore)
            expect(robot.direction.name).to.equal(directionBefore)
          })
      })
    })
  })
})