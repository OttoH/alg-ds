import Hash from '../index'

describe ('Hash', () => {
  test('hash', () => {
    const hash = new Hash()
    expect(hash.hash('33')).toEqual(6)
  })

  test('set', () => {
    const hash = new Hash()
    hash.set('hi', 'jim')
    expect(hash.keys()).toEqual(['hi'])
    expect(hash.buckets[hash.getKeyMap()['hi']].toArray()).toEqual([{ key: 'hi', value: 'jim' }])
  })

  test('set - override', () => {
    const hash = new Hash()
    hash.set('hi', 'jim')
    hash.set('hi', 'justangon')
    expect(hash.keys()).toEqual(['hi'])
    expect(hash.buckets[hash.getKeyMap()['hi']].toArray()).toEqual([{ key: 'hi', value: 'justangon' }])
  })

  test('get', () => {
    const hash = new Hash()
    hash.set('hi', 'jim')

    expect(hash.get('hi')).toEqual('jim')
  })

  test('delete', () => {
    const hash = new Hash()
    hash.set('hi', 'jim')
    hash.set('hello', 'justangon')
    hash.delete('hello')

    expect(hash.keys()).toEqual(['hi'])
    expect(hash.get('hello')).toEqual(undefined)
  })
})
