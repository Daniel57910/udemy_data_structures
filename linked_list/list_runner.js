const List = require(`./lib/list`)

let list = new List()
list.addToFront(30)
list.addToFront(56)
list.addToFront(69)
list.addToFront(83)
// list.addToBack(99)
// list.addToBack(1210)
// list.addToFront(26)
list.removeHead()
list.removeHead()
list.removeHead()

debugger