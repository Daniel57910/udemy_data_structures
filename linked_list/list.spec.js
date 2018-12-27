const List = require(`./list`)

describe(`Single Linked List`, () => {
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
    expect(list.tail.data).toEqual(30)
    expect(list.tail.prev.data).toEqual(49)
  })

  // test(`adding two items to the linked list`, () => {
  //   list.addToFront(30)
  //   list.addToFront(56)
  //   list.addToFront(74)
  //   expect(list.head.data).toEqual(74)
  //   expect(list.head.next.data).toEqual(56)
  //   expect(list.head.next.next.data).toEqual(30)
  // })
})