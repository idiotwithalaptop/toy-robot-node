'use strict'
/*
 * AUTHOR: Ryan Brown
 *
 * Direction class that represents a robot's direction.
 * Since a robot spins, direction can be considered in
 * a circular relationship with other relationships, represented
 * here in a Circular Doubly Linked List.
 *
 * Attributes available are
 *  name - The Unique name for this direction
 *  moveDeltaX - When moving in this direction, this represents the
 *               difference caused to the x-axis
 *  moveDeltaY - When moving in this direction, this represents the
 *               difference caused to the y-axis
 *  left - The next direction to the robot's left
 *  right - The next direction to the robot's right
 */
module.exports = class Direction {
  constructor (name, moveDeltaX, moveDeltaY) {
    this.name = name
    this.moveDeltaX = moveDeltaX
    this.moveDeltaY = moveDeltaY
    this.left = this
    this.right = this
  }

  insertToRight (newRight) {
    let oldRight = this.right
    this.right = newRight
    newRight.left = this
    newRight.right = oldRight
    oldRight.left = newRight
  }

  insertToLeft (newLeft) {
    let oldLeft = this.left
    this.left = newLeft
    newLeft.right = this
    newLeft.left = oldLeft
    oldLeft.right = newLeft
  }
}
