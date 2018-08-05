/* global describe, it, beforeEach */
const command = require('../../src/commands/ReportCommand')
const Robot = require('../../src/model/Robot')
const Table = require('../../src/model/Table')
const { expect } = require('chai')
const sinon = require('sinon')

describe('ReportCommand', function () {
  let robot = null
  let table = null
  beforeEach(function () {
    robot = new Robot()
    table = new Table(5, 5)
  })

  describe('run()', function () {
    describe('Before robot placement', function () {
      it('should not have called to console.log', function () {
        let spy = sinon.spy(console, 'log')
        command.run(robot, table)
        expect(spy.callCount).to.equal(0)
        spy.restore()
      })
    })

    describe('After robot placement', function () {
      beforeEach(function () {
        robot.place(1, 3, 'NORTH')
      })

      it('should have called to console.log', function () {
        let spy = sinon.spy(console, 'log')
        command.run(robot, table)
        expect(spy.callCount).to.equal(1)

        expect(spy.getCall(0).args[0]).to.equal('%s,%s,%s')
        expect(spy.getCall(0).args[1]).to.equal(1)
        expect(spy.getCall(0).args[2]).to.equal(3)
        expect(spy.getCall(0).args[3]).to.equal('NORTH')
        spy.restore()
      })
    })
  })
})
