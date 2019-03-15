import LinkedList from '../linkedList'

export default class Stack {
  constructor() {
    this.linkedList = new LinkedList()
  }

  peek() {
    if (!this.linkedList.head) {
      return null
    }
    return this.linkedList.head.value
  }

  push(value) {
    this.linkedList.prepend(value)
    return this
  }

  pop() {
    return this.linkedList.deleteHead()
  }

  fromArray(arr) {
    arr.forEach(element => {
      this.push(element)
    })
  }

  toArray() {
    this.linkedList.toArray()
  }
}