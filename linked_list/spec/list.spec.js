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
