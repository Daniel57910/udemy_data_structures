const HashMap = require(`../lib/hash`)

describe(`Basic hash map implementation`, () => {
  beforeEach(() => {
    hashMap = new HashMap()
    hashMap.createBucket()
    hashMap.createHash()
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

describe(`More complex hashing implementation`, () => {
  beforeEach(() => {
    hashMap = new HashMap()
    hashMap.createBucket()
    hashMap.createHash("complex")
  })
  test(`creating an advanced hash function using prime numbers & modulo`, () => {
    expect(hashMap.hashTheKey("A")).toEqual(1)
    expect(hashMap.hashTheKey("Z")).toEqual(0)
  })
  test(`inserting basic entries into the complex hash table array`, () => {
    hashMap.insert("A", "Z")
    hashMap.insert("Z", "A")
    expect(hashMap.returnBucket()[0][0]).toEqual({key: "Z", value: "A"})
    expect(hashMap.returnBucket()[1][0]).toEqual({key: "A", value: "Z"})
  })
  test(`more complex insertion cases being bucketed in correct places`, () => {
    hashMap.insert("GeorgeMartin", "Dance of Dragons")
    hashMap.insert("JRRTolkein", "Hobbits")
    hashMap.insert("Zoolander", "Abacus")
    expect(hashMap.returnBucket()[complexHash("GeorgeMartin")][0]).toEqual({key: "GeorgeMartin", value: "Dance of Dragons"})
  })
  test(`searching for entries`, () => {
    hashMap.insert("GeorgeMartin", "Dance of Dragons")
    hashMap.insert("JRRTolkein", "Hobbits")
    hashMap.insert("Zoolander", "Abacus")
    expect(hashMap.find("Zoolander")).toEqual("Abacus")
    expect(hashMap.find("IUDQB")).toEqual("DOES NOT EXIST")
  })
  test(`removing entries`, () => {
    hashMap.insert("Dance", "12345")
    hashMap.insert("DANIEL", "F")
    hashMap.insert("ABD231", "9999")
    hashMap.remove("Dance")
    expect(hashMap.find("Dance")).toEqual("DOES NOT EXIST")
  })
})


function complexHash(string) {
  let sum = 0, count = 0, modulo = 26, power = 7
  for (let character in string) {
    sum += (power * count) ** (string.charCodeAt(character) - 65)
    count++
  }
  return sum % modulo
}