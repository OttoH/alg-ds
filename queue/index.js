import LinkedList from '../linkedList'

export default class Queue {
  constructor() {
    this.linkedList = new LinkedList()
  }

  peek() {
    if (!this.linkedList.head) {
      return null
    }
    return this.linkedList.head.value
  }

  enqueue(value) {
    this.linkedList.append(value)
    return this
  }

  dequeue() {
    return this.linkedList.deleteHead()
  }

  fromArray(originArr) {
    originArr.forEach(element => {
      this.enqueue(element)
    })
  }

  toArray() {
    return this.linkedList.toArray()
  }
}