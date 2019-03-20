import Heap from '../heap'
import Comparator, { defaultComparator } from '../utils/basicComparator'

export default class PriorityQueue extends Heap {
  constructor () {
    super()

    this.priorities = new Map()

    this.comparor = new Comparator(this.priorityComparator.bind(this))
  }

  add (item, priority = 0) {
    this.priorities.set(item, priority)
    super.add(item)
    return this
  }

  priorityComparator (a, b) {
    return defaultComparator(this.priorities.get(a), this.priorities.get(b))
  }
}
