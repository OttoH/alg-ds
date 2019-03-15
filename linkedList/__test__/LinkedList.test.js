import LinkedList from '../index'
import { reverse } from 'dns';

describe('LinkedList', () => {
  test('prepend', () => {
    const ll = new LinkedList()

    ll.prepend('prepend')
    expect(ll.toArray()).toEqual(['prepend'])
  })

  test('append', () => {
    const ll = new LinkedList()

    ll.append('once')
    ll.append('twice')
    expect(ll.toArray()).toEqual(['once', 'twice'])
  })

  test('delete', () => {
    const ll = new LinkedList()

    ll.append('once')
    ll.append('twice')

    ll.delete('once')
    ll.delete('twice')
    expect(ll.toArray()).toEqual([])
  })

  test('find', () => {
    const ll = new LinkedList()

    ll.append('once')
    ll.append('twice')

    expect(ll.find('once')).toEqual({"next": {"next": null, "value": "twice"}, "value": "once"})
  })

  test('reverse', () => {
    const ll = new LinkedList()

    ll.append('once')
    ll.append('twice')
    ll.append('three')

    ll.reverse()

    expect(ll.toArray()).toEqual(['three', 'twice', 'once'])
  })

  test('from Array', () => {
    const ll = new LinkedList()

    ll.fromArray(['once', 'twice', 'three'])

    expect(ll.toArray()).toEqual(['once', 'twice', 'three'])
  })

  test('delete head', () => {
    const ll = new LinkedList()

    ll.append('once')
    ll.append('twice')
    ll.append('three')

    expect(ll.deleteHead()).toEqual('once')
    expect(ll.toArray()).toEqual(['twice', 'three'])
  })

  test('delete tail', () => {
    const ll = new LinkedList()

    ll.append('once')
    ll.append('twice')
    ll.append('three')

    expect(ll.deleteTail()).toEqual('three')
    expect(ll.toArray()).toEqual(['once', 'twice'])
  })

  test('delete tail - one element', () => {
    const ll = new LinkedList()

    ll.append('once')

    expect(ll.deleteTail()).toEqual('once')
    expect(ll.toArray()).toEqual([])
  })
})
