const HashMap = require(`../lib/hash`)

describe(`Basic hash map implementation`, () => {
  beforeEach(() => {
    hashMap = new HashMap()
  })
  test(`instantiation of hash map object`, () => {
    expect(hashMap.returnBucket()).toEqual([])
  })
  test(`generate simple hash bucket array`, () => {
    hashMap.createBucket()
    expect(hashMap.returnBucket().length).toEqual(26)
    let bucket = hashMap.returnBucket()[Math.floor(Math.random() * 26)]
    expect(bucket).toEqual([])
  })
})