const List = require(`../lib/list`)

describe(`Double Linked List`, () => {
  beforeEach(() => {
    list = new List()
  })
  test(`instantiation of the linked list`, () => {
    expect(list.head).toEqual(null)
    expect(list.tail).toEqual(null)
  })
  test(`adding one item to front of the list`, () => {
    list.addToFront(20)
    expect(list.head.data).toEqual(20)
    expect(list.tail.data).toEqual(20)
  })
  test(`adding three items to create a head, middle and tail`, () => {
    list.addToFront(30)
    list.addToFront(49)
    list.addToFront(56)
    expect(list.head.data).toEqual(56)
    expect(list.head.next.data).toEqual(49)
    expect(list.head.next.next.data).toEqual(30)

    expect(list.tail.data).toEqual(30)
    expect(list.tail.prev.data).toEqual(49)
    expect(list.tail.prev.prev.data).toEqual(56)
  })
})

describe(`adding items to the tail of the list`, () => {
  beforeEach(() => {
    list = new List()
  })
  test(`instantiation of the list via the tail`, () => {
    list.addToBack(59)
    expect(list.tail.data).toEqual(59)
    expect(list.head.data).toEqual(59)
  })
})

describe(`removing the head and tail of the list`, () => {
  beforeEach(() => {
    list = new List()
  })
  test(`removing the head of the list`, () => {
    list.addToFront(59)
    list.addToFront(84)
    list.addToFront(127)
    list.addToFront(64)
    list.removeHead()
    expect(list.head.data).toEqual(127)
    expect(list.head.prev).toEqual(null)
    expect(list.head.next.data).toEqual(84)
    expect(list.head.next.next.data).toEqual(59)
  })
  test(`removing the head when the head does not exist`, () => {
    list.addToFront(39)
    list.removeHead()
    expect(() => { list.removeHead().toThrowError("There is no head to remove")})
  })
})

describe(`removing the tail from the list`, () => {
  beforeEach(() => {
    list = new List()
  })
  test(`removing the tail when  the tail does not exist`, () => {
    list.addToBack(85)
    list.removeTail()
    expect(() => {list.removeTail().toThrowError("There is no tail to remove")})
  })
  test(`removing the tail from the list`, () => {
    list.addToFront(56)
    list.addToFront(89)
    list.addToFront(221)
    list.addToFront(31)
    list.addToBack(89)
    list.addToBack(61)
    list.removeTail()

    expect(list.tail.data).toEqual(89)
    expect(list.tail.next).toEqual(null)
    expect(list.tail.prev.data).toEqual(56)
  })
})

describe(`finding an element in the list by it's numerical index`, () => {
  beforeEach(() => {
    list = new List()
  })
  test(`searching a list with one element in it`, () => {
    list.addToFront("rob")
    expect(list.findIndex(0)).toEqual("rob")
  })
  test(`searching a list with several elements in it`, () => {
    list.addToFront("rob")
    list.addToFront("luke")
    list.addToFront("john")
    list.addToFront("simon")
    expect(list.findIndex(3)).toEqual("rob")
    expect(list.findIndex(2)).toEqual("luke")
    expect(() => {list.findIndex(5)}).toThrowError("out of bounds of linked list")
  })
})

describe(`finding an element by its numerical value`, () => {
  beforeEach(() => {
    list = new List()
  })
  test(`finding an item by it's value when one element in the list`, () => {
    list.addToFront("rob")
    expect(list.findValue("rob")).toEqual(0)
  })
  test(`adding several items to the list and searching by index`, () => {
    list.addToFront("sam")
    list.addToFront("luke")
    list.addToFront("john")
    list.addToFront("mike")
    expect(list.findValue("sam")).toEqual(3)
    expect(() => {list.findValue(42)}).toThrowError("item does not exist in the list")
  })
})

describe(`inserting into the linked list at a specific value`, () => {
  beforeEach(() => {
    list = new List()
  })
  test(`adding after a specific value in the list`, () => {
    list.addToFront(45)
    list.addToFront(41)
    list.addToBack(92)
    list.addToFront(75)
    list.insertAfter(41, 167)
    expect(list.head.next.next.data).toEqual(167)
    expect(list.head.next.next.next.data).toEqual(45)
  })
  test(`adding before a specific value in the list`, () => {
    list.addToFront(101)
    list.addToFront(2532)
    list.addToFront(442)
    list.addToFront(42)
    list.insertBefore(442, 91)
    expect(list.head.next.data).toEqual(91)
    expect(list.head.next.next.data).toEqual(442)
  })
  test(`adding before and after items several times`, () => {
    list.addToFront(81)
    list.addToFront(93)
    list.addToBack(73)
    list.addToFront(51)
    list.insertAfter(51, 311)
    list.insertBefore(311, 96)
    list.insertAfter(93, 1021)
    expect(list.head.next.data).toEqual(96)
    expect(list.head.next.next.data).toEqual(311)
    expect(list.head.next.next.next.data).toEqual(93)
    expect(list.head.next.next.next.next.data).toEqual(1021)
    expect(list.head.next.next.next.next.next.next.data).toEqual(list.tail.data)
  })
})

describe(`Removing items from the linked list`, () => {
  test('removing an item by value', () => {
    list.addToFront(36)
    list.addToFront(831)
    list.addToFront(381)
    list.addToFront(72)
    list.removeItem(381)
    expect(list.head.next.data).toEqual(831)
    list.removeItem(831)
    expect(list.head.next.data).toEqual(36)
  })
})