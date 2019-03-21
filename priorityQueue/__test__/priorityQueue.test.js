import PriorityQueue from '../'

describe('PriorityQueue', () => {
  test('add', () => {
    const pq = new PriorityQueue()
    pq.add(10, 1)
    pq.add(9, 2)
    pq.add(8, 3)
    expect(pq.toString()).toEqual('10,9,8')
  })

  test('remove', () => {
    const pq = new PriorityQueue()
    pq.add(10, 1)
    pq.add(9, 2)
    pq.add(8, 3)
    pq.add(7, 4)
    pq.add(6, 5)
    pq.add(5, 6)
    pq.add(4, 7)
    pq.add(3, 8)
    pq.remove(9)
    expect(pq.toString()).toEqual('10,7,8,3,6,5,4')
  })

  test('peek', () => {
    const pq = new PriorityQueue()
    pq.add(10, 1)
    pq.add(9, 2)
    pq.add(8, 3)
    expect(pq.peek()).toEqual(10)
    expect(pq.toString()).toEqual('10,9,8')
  })

  test('poll', () => {
    const pq = new PriorityQueue()
    pq.add(10, 1)
    pq.add(9, 2)
    pq.add(8, 3)
    pq.add(7, 4)
    pq.add(6, 5)
    expect(pq.poll()).toEqual(10)
    expect(pq.toString()).toEqual('9,7,8,6')
  })
})