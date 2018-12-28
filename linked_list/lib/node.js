class Node {
  constructor(data, next = null, prev = null) {
    this.data = data
    this.next = next
    this.prev = prev
    this.index = 0
  }
}


module.exports = Node