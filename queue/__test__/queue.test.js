import Queue from '../index'

describe('Queue', () => {
  test('peek', () => {
    const queue = new Queue()
    queue.fromArray(['a', 'b', 'c'])

    expect(queue.peek()).toEqual('a')
  })

  test('enqueue', () => {
    const queue = new Queue()
    queue.fromArray(['a', 'b', 'c'])

    queue.enqueue('0')

    expect(queue.toArray()).toEqual(['a', 'b', 'c', '0'])
  })

  test('dequeue', () => {
    const queue = new Queue()
    queue.fromArray(['a', 'b', 'c'])

    queue.dequeue()

    expect(queue.toArray()).toEqual(['b', 'c'])
  })
})