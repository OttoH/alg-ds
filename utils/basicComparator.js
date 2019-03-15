var defaultComparator = (a, b) => {
  if(a === b) {
    return 0
  }
  return a < b ? -1 : 1
}

// function Comparator(customComparatorFunc = null) {
//   this.compareFunc = customComparatorFunc || defaultComparator
// }

// Comparator.prototype.euqal = function(a, b) {
//   return this.compareFunc(a, b) === 0
// }

// Comparator.prototype.lessThan = function(a, b) {
//   return this.compareFunc(a, b) < 0
// }

// Comparator.prototype.greatThan = function(a, b) {
//   return this.compareFunc(a, b) > 0
// }

// export default Comparator

export default class Comparator {
  constructor(customComparatorFunc = null) {
    this.compareFunc = customComparatorFunc || defaultComparator
  }

  equal(a, b) {
    return this.compareFunc(a, b) === 0
  }

  lessThan(a, b) {
    return this.compareFunc(a, b) < 0
  }

  greatThan(a, b) {
    return this.compareFunc(a, b) > 0
  }
}