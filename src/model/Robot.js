'use strict'
const Direction = require('./Direction')

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
    }
  }
}

// Private Functions

function generateSupportedDirections () {
  // Create directions and their relationships.
  let north = new Direction('NORTH', 0, 1)
  let east = new Direction('EAST', 1, 0)
  let south = new Direction('SOUTH', -1, 0)
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
