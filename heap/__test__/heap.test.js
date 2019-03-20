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
})
