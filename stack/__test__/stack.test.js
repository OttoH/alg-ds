import Stack from '../'

describe('Stack', () => {
  test('peek', () => {
    const stack = new Stack()

    stack.push('1')
    stack.push('2')

    expect(stack.peek()).toEqual('2')
  })

  test('push', () => {
    const stack = new Stack()

    stack.fromArray(['1', '2', '3'])
    stack.push('a')

    expect(stack.peek()).toEqual('a')
  })

  test('pop', () => {
    const stack = new Stack()

    stack.fromArray(['1', '2', '3'])

    expect(stack.pop()).toEqual('3')
  })
})