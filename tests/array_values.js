"use strict";

const assert = require('assert')
const ArrayGlobe = require('../')


describe('Walking through array ["first","second","third"]', () => {
  let myArray = new ArrayGlobe(['first','second','third'])
  it('should return "first"', () => {
    assert.equal(myArray.get(), "first")
  })
  it('should return "second"', () => {
    assert.equal(myArray.get(), "second")
  })
  it('should return "third"', () => {
    assert.equal(myArray.get(), "third")
  })
})


describe('Get an specific index from array [1, 2, 3] => get(2)', () => {
  let myArray = new ArrayGlobe([1, 2, 3])
  it('should return 2', () => {
    assert.equal(myArray.get(1), 2)
  })
})
