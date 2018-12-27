const Node = require('./node')

class LinkedList {
  constructor() {
    this.head = null
    this.newNode
  }

  addToFront(element) {
    this.newNode = new Node(element)
    !this.head ? this.createHead() : this.addElement()
  }
  createHead() {
    this.head = this.newNode
  }
  addElement() {
    this.newNode.next = this.head
    this.head = this.newNode
  }
}

module.exports = LinkedList