"use strict";

class ArrayGlobe {
  constructor(array) {
    this.array = array;
    if (array.length === 0) return null

    this.lastIndex = 0;
  }

  get(index) {
    if (this.array.length === 1) return this.array[0]

    if(typeof index == "undefined") {
      // is outside of range?
      if (this.lastIndex > this.array.length - 1 || this.lastIndex < 0) {
        this.lastIndex = 0
        return this.array[0]
      } else {
        let array = this.array[this.lastIndex]
        this.lastIndex++
        return array
      }
    }else {
      return this.array[index]
    }

  }
}


module.exports = ArrayGlobe;
