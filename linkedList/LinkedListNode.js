export default class LinkedListNode {
  constructor(value, next = null) {
    this.next = next
    this.value = value
  }

  toString() {
    return this.value
  }
}