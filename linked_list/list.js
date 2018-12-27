const Node = require('./node')

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.newNode
  }

  addToFront(element) {
    this.newNode = new Node(element)
    !this.head ? this.createGenesisBlocks() : this.addElement()
  }

  createGenesisBlocks() {
    this.head = this.newNode
    this.tail = this.newNode
  }
  addElement() {
    this.head.prev = this.newNode
    this.newNode.next = this.head
    this.head = this.newNode
  }

}

module.exports = LinkedList