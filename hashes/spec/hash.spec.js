const HashMap = require(`../lib/hash`)

describe(`Basic hash map implementation`, () => {
  beforeEach(() => {
    hashMap = new HashMap()
    hashMap.createBucket()
  })
  test(`generate simple hash bucket array`, () => {
    expect(hashMap.returnBucket().length).toEqual(26)
    expect(hashMap.returnBucket()[Math.floor(Math.random() * 26)]).toEqual([])
  })
  test(`identifying location of key value pair in hash map`, () => {
    expect(hashMap.hashTheKey("ABCD")).toEqual(0)
    expect(hashMap.hashTheKey("ZBACDEF")).toEqual(25)
  })
  test(`adding values to basic hash map`, () => {
    hashMap.insert("Adder", "Into My Heart")
    expect(hashMap.returnBucket()[0][hashMap.hashTheKey("Adder")]).toEqual({key: "Adder", value: "Into My Heart"})
  })
  test(`hash map collissions`, () => {
    hashMap.insert("GRR", "GMT")
    hashMap.insert("GRR", "CLS")
    expect(hashMap.returnBucket()[hashMap.hashTheKey("GRR")]).toEqual([{key: "GRR", value: "GMT"}, {key: "GRR",value: "CLS"}])
  })
  test(`retrieving values from the hash map`, () => {
    hashMap.insert("ABCDEF", "123456")
    hashMap.insert("JOHN", "ROBBINS")
    hashMap.insert("SALLY", "LUKE")
    expect(hashMap.find("ABCDEF")).toEqual("123456")
    expect(hashMap.find("JOHN")).toEqual("ROBBINS")
    expect(hashMap.find("SALLY")).toEqual("LUKE")
    expect(hashMap.find('TIM')).toEqual('DOES NOT EXIST')
  })
  test(`removing an element from the hash map`, () => {
    hashMap.insert("ABCDEF", "123456")
    hashMap.remove("ABCDEF")
    expect(hashMap.find("ABCDEF")).toEqual("DOES NOT EXIST")
  })
})