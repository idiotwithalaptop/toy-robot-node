'use strict'

/*
 * AUTHOR: Ryan Brown
 *
 * Table class that represents the table that a robot is running on.
 * The table is really the environment around the robot, which is fairly
 * straight forward and doesn't provide much more functionality than
 * maintaining the diameters of the table.  However, in the event that
 * any obstacles were introduced, this would be the place to do it.
 *
 * Attributes available are:
 *   width - The width of the table
 *   height - The height of the table
 */
module.exports = class Table {
  constructor (width, height) {
    this.width = width
    this.height = height
  }
}
