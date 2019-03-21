import { MinHeap } from '../'

describe('Heap', () => {
  test('add', () => {
    const minHeap = new MinHeap()
    minHeap.add(10)
    minHeap.add(9)
    minHeap.add(8)
    expect(minHeap.toString()).toEqual(['8', '10', '9'].toString())
  })

  test('poll', () => {
    const minHeap = new MinHeap()
    minHeap.add(10)
    minHeap.add(9)
    minHeap.add(8)
    minHeap.add(7)
    expect(minHeap.poll()).toEqual(7)
    expect(minHeap.toString()).toEqual('8,10,9')
  })

  test('peek', () => {
    const minHeap = new MinHeap()
    minHeap.add(10)
    minHeap.add(9)
    minHeap.add(8)
    minHeap.add(7)
    expect(minHeap.peek()).toEqual(7)
    expect(minHeap.toString()).toEqual('7,8,9,10')
  })

  test('find', () => {
    const minHeap = new MinHeap()
    minHeap.add(10)
    minHeap.add(9)
    minHeap.add(8)
    minHeap.add(7)
    expect(minHeap.find(8)).toEqual([1])
  })

  test('find', () => {
    const minHeap = new MinHeap()
    minHeap.add(10)
    minHeap.add(9)
    minHeap.add(8)
    minHeap.add(7)
    minHeap.add(11)
    minHeap.add(12)
    minHeap.add(13)
    minHeap.add(14)
    expect(minHeap.remove(8).toString()).toEqual('7,10,9,14,11,12,13')
  })
})
