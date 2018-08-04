/* global describe, it, before */
const Direction = require('../../src/model/Direction')
const expect = require('chai').expect

describe('Direction', function () {
  describe('constructor', function () {
    let subject = null
    const name = 'Test Direction'
    const moveDeltaX = 1
    const moveDeltaY = -1

    before(function () {
      subject = new Direction(name, moveDeltaX, moveDeltaY)
    })

    it('should return the name that was entered', function () {
      expect(subject.name).to.equal(name)
    })

    it('should return the X Move Delta that was entered', function () {
      expect(subject.moveDeltaX).to.equal(moveDeltaX)
    })

    it('should return the Y Move Delta that was entered', function () {
      expect(subject.moveDeltaY).to.equal(moveDeltaY)
    })

    it('should exist alone in a circular direction matrix', function () {
      expect(subject.left).to.equal(subject)
      expect(subject.right).to.equal(subject)
    })
  })

  describe('insertToRight', function () {
    describe('2 directions', function () {
      let up = null
      let down = null

      before(function () {
        up = new Direction('Up', 0, 1)
        down = new Direction('Down', 0, -1)
        up.insertToRight(down)
      })

      it('should have down solely neighbouring up', function () {
        expect(up.left).to.equal(down)
        expect(up.right).to.equal(down)
      })

      it('should have up solely neighbouring down', function () {
        expect(down.left).to.equal(up)
        expect(down.right).to.equal(up)
      })
    })

    describe('4 directions', function () {
      let north = null
      let east = null
      let south = null
      let west = null

      before(function () {
        north = new Direction('North', 0, 1)
        east = new Direction('East', 1, 0)
        south = new Direction('South', 0, -1)
        west = new Direction('West', -1, 0)
        north.insertToRight(east)
        east.insertToRight(south)
        south.insertToRight(west)
      })

      it('should have east to the right of north', function () {
        expect(north.right).to.equal(east)
      })

      it('should have west to the left of north', function () {
        expect(north.left).to.equal(west)
      })

      it('should have south to the right of east', function () {
        expect(east.right).to.equal(south)
      })

      it('should have north to the left of east', function () {
        expect(east.left).to.equal(north)
      })

      it('should have west to the right of south', function () {
        expect(south.right).to.equal(west)
      })

      it('should have east to the left of south', function () {
        expect(south.left).to.equal(east)
      })

      it('should have north to the right of west', function () {
        expect(west.right).to.equal(north)
      })

      it('should have south to the left of west', function () {
        expect(west.left).to.equal(south)
      })
    })
  })

  describe('insertToLeft', function () {
    describe('2 directions', function () {
      let up = null
      let down = null

      before(function () {
        up = new Direction('Up', 0, 1)
        down = new Direction('Down', 0, -1)
        up.insertToLeft(down)
      })

      it('should have down solely neighbouring up', function () {
        expect(up.left).to.equal(down)
        expect(up.right).to.equal(down)
      })

      it('should have up solely neighbouring down', function () {
        expect(down.left).to.equal(up)
        expect(down.right).to.equal(up)
      })
    })

    describe('4 directions', function () {
      let north = null
      let east = null
      let south = null
      let west = null

      before(function () {
        north = new Direction('North', 0, 1)
        east = new Direction('East', 1, 0)
        south = new Direction('South', 0, -1)
        west = new Direction('West', -1, 0)
        north.insertToLeft(west)
        west.insertToLeft(south)
        south.insertToLeft(east)
      })

      it('should have east to the right of north', function () {
        expect(north.right).to.equal(east)
      })

      it('should have west to the left of north', function () {
        expect(north.left).to.equal(west)
      })

      it('should have south to the right of east', function () {
        expect(east.right).to.equal(south)
      })

      it('should have north to the left of east', function () {
        expect(east.left).to.equal(north)
      })

      it('should have west to the right of south', function () {
        expect(south.right).to.equal(west)
      })

      it('should have east to the left of south', function () {
        expect(south.left).to.equal(east)
      })

      it('should have north to the right of west', function () {
        expect(west.right).to.equal(north)
      })

      it('should have south to the left of west', function () {
        expect(west.left).to.equal(south)
      })
    })
  })
})
