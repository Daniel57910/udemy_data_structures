const Node = require('../lib/node')

describe(`node in a list`, () => {
 test(`basic instantiation of the node`, () => {
   let node = new Node(10)
   expect(node.data).toEqual(10)
 })
})