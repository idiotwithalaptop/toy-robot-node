/* global describe, it, before, beforeEach */
const Robot = require('../../src/model/Robot')
const Direction = require('../../src/model/Direction')
const expect = require('chai').expect

describe('Robot', function () {
  describe('constructor', function () {
    let subject = null

    before(function () {
      subject = new Robot()
    })

    it('should support North direction', function () {
      expect(subject.supportedDirections).to.have.property('NORTH')
      expect(subject.supportedDirections['NORTH']).to.be.an.instanceOf(Direction)
    })

    it('should support South direction', function () {
      expect(subject.supportedDirections).to.have.property('SOUTH')
      expect(subject.supportedDirections['SOUTH']).to.be.an.instanceOf(Direction)
    })

    it('should support East direction', function () {
      expect(subject.supportedDirections).to.have.property('EAST')
      expect(subject.supportedDirections['EAST']).to.be.an.instanceOf(Direction)
    })

    it('should support West direction', function () {
      expect(subject.supportedDirections).to.have.property('WEST')
      expect(subject.supportedDirections['WEST']).to.be.an.instanceOf(Direction)
    })
  })

  describe('Placement', function () {
    var subject = null
    var x = 1
    var y = 2

    beforeEach(function () {
      subject = new Robot()
    })

    describe('Before placement', function () {
      it('should not be placed', function () {
        expect(subject.isPlaced()).to.equal(false)
      })
    })

    describe('After placement with valid direction', function () {
      var validDirection = 'NORTH'
      beforeEach(function () {
        subject.place(x, y, validDirection)
      })

      it('should be placed', function () {
        expect(subject.isPlaced()).to.equal(true)
      })
    })

    describe('After placement with invalid direction', function () {
      var invalidDirection = 'WACCA'
      beforeEach(function () {
        subject.place(x, y, invalidDirection)
      })

      it('should not be placed', function () {
        expect(subject.isPlaced()).to.equal(false)
      })
    })
  })
})
