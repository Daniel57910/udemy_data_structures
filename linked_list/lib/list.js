const Node = require('./node')

class LinkedList {

  constructor() {
    this.head = null
    this.tail = null
    this.newNode
  }

  addToFront(element) {
    this.newNode = new Node(element)
    !this.head ? this.createGenesisBlocks() : this.addToHead()
  }

  addToBack(element) {
    this.newNode = new Node(element)
    !this.head ? this.createGenesisBlocks() : this.addToTail()
  }

  createGenesisBlocks() {
    this.head = this.tail = this.newNode
  }

  addToTail() {
    this.tail.next = this.newNode
    this.newNode.prev = this.tail
    this.tail = this.newNode
  }

  addToHead() {
    /*previous property of head object points to new head object, new head object points to head and new node object becomes head linked to rest*/
    this.head.prev = this.newNode
    this.newNode.next = this.head
    this.head = this.newNode
  }

  removeHead() {
    if (!this.head) {
      throw new Error("There is no head to remove")
    }
    else {
      this.head = this.head.next
      if (this.head) this.head.prev = null
    }
  }

  removeTail() {
    if (!this.tail) {
      throw new Error("There is no tail to remove")
    }
    else {
      this.tail = this.tail.prev
      if (this.tail) this.tail.next = null
    }
  }

  findIndex(index) {
    let count = 0, current = this.head
    while (count < index) {
      if (!current) throw new Error("out of bounds of linked list")
      current = current.next
      count++
    }
    return current.data
  }

  findValue(value) {
    let count = 0, current = this.head
    while(current) {
      if (current.data === value) return count
      current = current.next
      count++
    }
    if (!current) throw new Error("item does not exist in the list")
  }

  insertAfter(value, element) {
    this.newNode = new Node(element)
    let current = this.head
    while(current) {
      if (current.data === value) {
        current.next.prev = this.newNode
        this.newNode.prev = current
        this.newNode.next = current.next
        current.next = this.newNode
        return
      }
      current = current.next
    }
  }

  insertBefore(value, element) {
    this.newNode = new Node(element)
    let current = this.head
    while(current) {
      if (current.data === value) {
        current.prev.next = this.newNode
        this.newNode.next = current
        this.newNode.prev = current.prev
        current.prev = this.newNode

        return
      }
      current = current.next
    }
  }
}


module.exports = LinkedList