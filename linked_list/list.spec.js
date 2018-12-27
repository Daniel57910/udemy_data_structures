const List = require(`./list`)

describe(`Single Linked List`, () => {
  beforeEach(() => {
    list = new List()
  })
  test(`instantiation of the linked list`, () => {
    expect(list.head).toEqual(null)
  })
  test(`adding one item to front of the list`, () => {
    list.addToFront(20)
    expect(list.head.data).toEqual(20)
  })

  test(`adding several elements to the linked list`, () => {
    list.addToFront(30)
    list.addToFront(56)
    list.addToFront(74)
    expect(list.head.data).toEqual(74)
    expect(list.head.next.data).toEqual(56)
    expect(list.head.next.next.data).toEqual(30)
  })
})