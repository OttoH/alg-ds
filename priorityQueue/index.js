import { MinHeap } from '../heap'
import Comparator, { defaultComparator } from '../utils/basicComparator'

export default class PriorityQueue extends MinHeap {
  constructor () {
    super()

    this.priorities = new Map()

    this.comparator = new Comparator(this.priorityComparator.bind(this))
  }

  add (item, priority = 0) {
    this.priorities.set(item, priority)
    super.add(item)
    return this
  }

  remove (item) {
    super.remove(item)
    this.priorities.delete(item)
    return this
  }

  priorityComparator (a, b) {
    return defaultComparator(this.priorities.get(a), this.priorities.get(b))
  }
}
