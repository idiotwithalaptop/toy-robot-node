/* global describe, it  */
const utils = require('../src/utils')
const expect = require('chai').expect

describe('Utils', function () {
  const testString = 'TestString'
  const testNumber = 123
  const testObj = {someObj: 'wacca'}

  describe('isNullOrUndefined', function () {
    it('should return true when parameter is missing', function () {
      expect(utils.isNullOrUndefined()).to.equal(true)
    })
    it('should return true when parameter is undefined', function () {
      expect(utils.isNullOrUndefined(testObj.someField)).to.equal(true)
    })
    it('should return true when parameter is null', function () {
      expect(utils.isNullOrUndefined(null)).to.equal(true)
    })
    it('should return false when parameter is a string', function () {
      expect(utils.isNullOrUndefined(testString)).to.equal(false)
    })
    it('should return false when parameter is a number', function () {
      expect(utils.isNullOrUndefined(testNumber)).to.equal(false)
    })
    it('should return false when parameter is a object', function () {
      expect(utils.isNullOrUndefined(testObj)).to.equal(false)
    })
  })

  describe('isNotNullOrUndefined', function () {
    it('should return false when parameter is missing', function () {
      expect(utils.isNotNullOrUndefined()).to.equal(false)
    })
    it('should return false when parameter is undefined', function () {
      expect(utils.isNotNullOrUndefined(testObj.someField)).to.equal(false)
    })
    it('should return false when parameter is null', function () {
      expect(utils.isNotNullOrUndefined(null)).to.equal(false)
    })
    it('should return true when parameter is a string', function () {
      expect(utils.isNotNullOrUndefined(testString)).to.equal(true)
    })
    it('should return true when parameter is a number', function () {
      expect(utils.isNotNullOrUndefined(testNumber)).to.equal(true)
    })
    it('should return true when parameter is a object', function () {
      expect(utils.isNotNullOrUndefined(testObj)).to.equal(true)
    })
  })

  describe('isIntegerString', function () {
    it('should return false when parameter is missing', function () {
      expect(utils.isIntegerString()).to.equal(false)
    })
    it('should return false when parameter is undefined', function () {
      expect(utils.isIntegerString(testObj.someField)).to.equal(false)
    })
    it('should return false when parameter is null', function () {
      expect(utils.isIntegerString(null)).to.equal(false)
    })
    it('should return false when parameter is a Alpha string', function () {
      expect(utils.isIntegerString(testString)).to.equal(false)
    })
    it('should return false when parameter is a Alphanumeric string', function () {
      expect(utils.isIntegerString('Testing123')).to.equal(false)
    })
    it('should return true when parameter is a Integer string', function () {
      expect(utils.isIntegerString('123')).to.equal(true)
    })
    it('should return true when parameter is a negative Integer string', function () {
      expect(utils.isIntegerString('-123')).to.equal(true)
    })
    it('should return false when parameter is a Floating Point Number string', function () {
      expect(utils.isIntegerString('123.54')).to.equal(false)
    })
    it('should return false when parameter is a empty string', function () {
      expect(utils.isIntegerString(testString)).to.equal(false)
    })
    it('should return false when parameter is a number', function () {
      expect(utils.isIntegerString(testNumber)).to.equal(false)
    })
    it('should return false when parameter is a object', function () {
      expect(utils.isIntegerString(testObj)).to.equal(false)
    })
  })
})
