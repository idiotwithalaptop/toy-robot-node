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

  describe('Movement', function () {
    var subject = null

    beforeEach(function () {
      subject = new Robot()
    })

    describe('Before placement', function () {
      it('should ignore calls to turn left', function () {
        subject.turnLeft()
        expect(subject.isPlaced()).to.equal(false)
      })

      it('should ignore calls to turn right', function () {
        subject.turnRight()
        expect(subject.isPlaced()).to.equal(false)
      })
    })

    describe('After placement', function () {
      beforeEach(function () {
        subject.place(1, 2, 'NORTH')
      })

      describe('After turning left', function () {
        it('should not have moved on the x-axis', function () {
          let xBefore = subject.x
          subject.turnLeft()
          expect(subject.x).to.equal(xBefore)
        })

        it('should not have moved on the y-axis', function () {
          let yBefore = subject.y
          subject.turnLeft()
          expect(subject.y).to.equal(yBefore)
        })

        it('should be facing west', function () {
          subject.turnLeft()
          expect(subject.direction.name).to.equal('WEST')
        })
      })

      describe('After turning right', function () {
        it('should not have moved on the x-axis', function () {
          let xBefore = subject.x
          subject.turnRight()
          expect(subject.x).to.equal(xBefore)
        })

        it('should not have moved on the y-axis', function () {
          let yBefore = subject.y
          subject.turnRight()
          expect(subject.y).to.equal(yBefore)
        })

        it('should be facing east', function () {
          subject.turnRight()
          expect(subject.direction.name).to.equal('EAST')
        })
      })
    })
  })
})
