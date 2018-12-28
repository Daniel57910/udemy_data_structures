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
}

module.exports = LinkedList