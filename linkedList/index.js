import LinkedListNode from './LinkedListNode'
import Comparator from '../utils/basicComparator'

export default class LinkedList {
  constructor(customComparatorFunc = null) {
    this.head = null
    this.tail = null

    this.comparator = new Comparator(customComparatorFunc)
  }

  prepend(value) {
    const newNode = new LinkedListNode(value, this.head)
    this.head = newNode

    if (!this.tail) {
      this.tail = newNode
    }

    return this
  }

  append(value) {
    if(!this.head) {
      this.prepend(value)
      return this
    }

    const newNode = new LinkedListNode(value)
    this.tail.next = newNode
    this.tail = newNode

    return this
  }

  delete(value) {
    if (!this.head) {
      return null
    }

    let currentNode = this.head
    let deleteNode = null

    // if target is in the head
    while(
      currentNode &&
      this.comparator.equal(currentNode.value, value)
    ) {
      deleteNode = currentNode
      this.head = this.head.next
      currentNode = this.head
    }

    // if target exists in middle
    currentNode = this.head ? this.head.next : null
    while(currentNode) {
      if (this.comparator.equal(current.value, value)) {
        deleteNode = currentNode
        this.head.next = currentNode.next
        currentNode = this.head.next
      } else {
        currentNode = currentNode.next
      }
    }

    // check if need clear tail
    if (this.comparator.equal(this.tail.value, value)) {
      this.tail = currentNode
    }

    return deleteNode
  }

  find(value) {
    if (!this.head) {
      return null
    }

    let currentNode = this.head
    let foundNode = null
    while(currentNode) {
      if (this.comparator.equal(currentNode.value, value)) {
        foundNode = currentNode
      }
      currentNode = currentNode.next
    }

    return foundNode
  }

  reverse() {
    if (!this.head) {
      return this
    }

    let currentNode = this.head
    let prevNode = null
    let nextNode = null

    while(currentNode) {
      nextNode = currentNode.next
      currentNode.next = prevNode

      prevNode = currentNode
      currentNode = nextNode
    }

    this.head = this.tail
    this.tail = prevNode

    return this
  }

  deleteHead() {
    if(!this.head) {
      return null
    }

    const headVal = this.head.value
    const nextHeadNode = this.head.next
    if (nextHeadNode) {
      this.head = nextHeadNode
    } else {
      this.head = null
      this.tail = null
    }

    return headVal
  }

  deleteTail() {
    if(!this.tail) {
      return null
    }

    const tailVal = this.tail.value

    if (this.head.next === null) {
      this.head = null
      return tailVal
    }

    let currentNode = this.head
    while(currentNode.next) {
      if(currentNode.next.next !== null) {
        currentNode = currentNode.next
      } else {
        currentNode.next = null
      }
    }

    this.tail = currentNode

    return tailVal
  }

  fromArray(sourceArr) {
    sourceArr.forEach((val) => {
      this.append(val)
    })
    return this
  }

  toArray() {
    let currentNode = this.head
    let arr = []
    while(currentNode) {
      arr.push(currentNode.value)
      currentNode = currentNode.next
    }
    return arr
  }
}