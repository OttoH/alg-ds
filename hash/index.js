import LinkedList from '../linkedList/'

export default class Hash {
  constructor (customHashTableSize = 32) {
    this.hashTableSize = customHashTableSize

    this.buckets = Array(this.hashTableSize).fill(null).map(() => new LinkedList())
    this.keyMap = {}
  }

  hash (key) {
    const hash = Array.from(key).reduce((ac, cu) => ac + cu.charCodeAt(0), 0)
    return hash % this.buckets.length
  }

  set (key, value) {
    const hashKey = this.hash(key)
    this.keyMap[key] = hashKey

    const bucketLinkedList = this.buckets[hashKey]
    const bucketNode = bucketLinkedList.find(key, node => node.key === key)

    if (bucketNode) {
      bucketNode.value.value = value
    } else {
      bucketLinkedList.append({ key, value })
    }
  }

  get (key) {
    const hashKey = this.hash(key)

    const bucketLinkedList = this.buckets[hashKey]
    const bucketNode = bucketLinkedList.find(key, node => node.key === key)

    if (bucketNode) {
      return bucketNode.value.value
    }

    return undefined
  }

  delete (key) {
    const hashKey = this.hash(key)

    const bucketLinkedList = this.buckets[hashKey]
    const bucketNode = bucketLinkedList.find(key, node => node.key === key)

    if (bucketNode) {
      bucketLinkedList.delete(bucketNode.value)
      delete this.keyMap[key]
    }
    return null
  }

  has (key) {
    return Object.hasOwnProperty.call(this.keyMap, key)
  }

  keys () {
    return Object.keys(this.keyMap)
  }

  getKeyMap () {
    return this.keyMap
  }
}
