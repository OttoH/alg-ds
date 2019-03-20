import Comparator from '../utils/basicComparator'

export class Heap {
  constructor (customComparatorFunc = null) {
    if (new.target === 'Heap') {
      throw new TypeError('Cannot construct Heap instance directly')
    }

    this.heapContainer = []
    this.comparator = new Comparator(customComparatorFunc)
  }

  getParentIdx (childIdx) {
    return Math.floor((childIdx - 1) / 2)
  }

  getLeftChildIdx (parentIdx) {
    return 2 * parentIdx + 1
  }

  getRightChildIdx (parentIdx) {
    return 2 * parentIdx + 2
  }

  hasParent (childIdx) {
    return this.getParentIdx(childIdx) >= 0
  }

  hasLeftChild (parentIdx) {
    return this.getLeftChildIdx(parentIdx) < this.heapContainer.length
  }

  hasRightChild (parentIdx) {
    return this.getRightChildIdx(parentIdx) < this.heapContainer.length
  }

  parent (childIdx) {
    return this.heapContainer[this.getParentIdx(childIdx)]
  }

  leftChild (parentIdx) {
    return this.heapContainer[this.getLeftChildIdx(parentIdx)]
  }

  rightChild (parentIdx) {
    return this.heapContainer[this.getRightChildIdx(parentIdx)]
  }

  swap (idxA, idxB) {
    const bufferA = this.heapContainer[idxA]
    this.heapContainer[idxA] = this.heapContainer[idxB]
    this.heapContainer[idxB] = bufferA
  }

  peek () {
    if (this.heapContainer.length === 0) {
      return null
    }

    return this.heapContainer[0]
  }

  heapifyUp (customStartIdx) {
    let startIdx = customStartIdx || this.heapContainer.length - 1
    while (
      this.hasParent(startIdx) &&
      !this.isValidatePairs(this.parent(startIdx), this.heapContainer[startIdx])
    ) {
      const parentIdx = this.getParentIdx(startIdx)
      this.swap(parentIdx, startIdx)
      startIdx = parentIdx
    }
  }

  heapifyDown (customStartIdx) {
    let startIdx = customStartIdx || 0
    while (this.hasLeftChild(startIdx)) {
      const thisElement = this.heapContainer[startIdx]
      if (
        this.hasRightChild(startIdx) &&
        this.isValidatePairs(this.rightChild(startIdx), this.leftChild(startIdx)) &&
        !this.isValidatePairs(this.rightChild(startIdx), thisElement)
      ) {
        const rightIdx = this.getRightChildIdx(startIdx)
        this.swap(rightIdx, startIdx)
        startIdx = rightIdx
      } else if (!this.isValidatePairs(thisElement, this.leftChild(startIdx))) {
        const leftIdx = this.getLeftChildIdx(startIdx)
        this.swap(leftIdx, startIdx)
        startIdx = leftIdx
      } else {
        break
      }
    }
  }

  add (element) {
    this.heapContainer.push(element)
    this.heapifyUp()
    return this
  }

  poll () {
    if (!this.heapContainer.length) {
      return null
    }

    if (this.heapContainer.length === 1) {
      return this.heapContainer.pop()
    }

    const result = this.heapContainer[0]

    this.heapContainer[0] = this.heapContainer.pop()
    this.heapifyDown()

    return result
  }

  isValidatePairs (nodeOne, nodeTwo) {
    throw new Error(`
      You have to implement heap pair comparision method
      for ${nodeOne} and ${nodeTwo} values.
    `)
  }

  toString () {
    return this.heapContainer.toString()
  }
}

export class MinHeap extends Heap {
  isValidatePairs (nodeOne, nodeTwo) {
    const comparator = new Comparator()
    return comparator.lessThan(nodeOne, nodeTwo) || comparator.equal(nodeOne, nodeTwo)
  }
}

export class MaxHeap extends Heap {
  isValidatePairs (nodeOne, nodeTwo) {
    const comparator = new Comparator()
    return comparator.greatThan(nodeOne, nodeTwo) || comparator.equal(nodeOne, nodeTwo)
  }
}
