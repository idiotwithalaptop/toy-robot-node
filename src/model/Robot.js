'use strict'
const Direction = require('./Direction')

/*
 * AUTHOR: Ryan Brown
 *
 * Robot class that represents the robot.
 * Tracks the robot's position using x & y coordinates and it's
 * current direction.  Importantly, it set's up what directions it
 * supports, it was decided that the Robot was responsible for managing
 * this since it allows for more expensive robots may support a wider
 * array of directions, or cheaper less advanced robots to support
 * fewer directions.
 *
 * Attributes available are:
 *   x - The x axis portion of the robot's current co-ordinates.
 *   y - The y axis portion of the robot's current co-ordinates.
 *   direction - The direction that the robot is current facing.
 *   supportedDirections - A map/dictionary of directions this
 *     robot supports.
 */
module.exports = class Robot {
  constructor () {
    this.x = null
    this.y = null
    this.direction = null

    // Initialise Supported Directions
    this.supportedDirections = generateSupportedDirections()
  }

  isPlaced () {
    return this.x !== null && this.y !== null && this.direction !== null
  }

  place (x, y, direction) {
    let placedDirection = this.supportedDirections[direction.toUpperCase()]
    if (placedDirection !== undefined) {
      this.direction = placedDirection
      this.x = x
      this.y = y
    } else {
      console.error('Attempted to place robot in invalid direction: ' + direction)
    }
  }

  turnLeft () {
    if (this.isPlaced()) {
      this.direction = this.direction.left
    } else {
      console.error('Attempted to turn robot left without prior placement.')
    }
  }

  turnRight () {
    if (this.isPlaced()) {
      this.direction = this.direction.right
    } else {
      console.error('Attempted to turn robot right without prior placement.')
    }
  }

  move (maxX, maxY) {
    let newX = this.x
    let newY = this.y
    if (this.isPlaced()) {
      newX = this.x + this.direction.moveDeltaX
      newY = this.y + this.direction.moveDeltaY
    }

    if (newX >= 0 && newX < maxX && newY >= 0 && newY < maxY) {
      this.x = newX
      this.y = newY
    } else {
      console.error('Attempted to move robot outside of it\'s maximum bounds.')
    }
  }
}

// Private Functions

function generateSupportedDirections () {
  // Create directions and their relationships.
  let north = new Direction('NORTH', 0, 1)
  let east = new Direction('EAST', 1, 0)
  let south = new Direction('SOUTH', 0, -1)
  let west = new Direction('WEST', -1, 0)
  north.insertToRight(east)
  east.insertToRight(south)
  south.insertToRight(west)

  // Place directions into a Map/Dictionary for easy searching.
  let directions = {}
  directions[north.name] = north
  directions[east.name] = east
  directions[south.name] = south
  directions[west.name] = west
  return directions
}
