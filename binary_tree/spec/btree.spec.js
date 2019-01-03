const BinaryTree = require('../lib/btree')

describe('Basic Binary Search Tree', () => {
	beforeEach(() => {
		binaryTree = new BinaryTree(50)
	})
	test('instantiation of the basic binary search tree', () => {
		expect(binaryTree.value).toEqual(50)
		expect(binaryTree.left).toEqual(null)
		expect(binaryTree.right).toEqual(null)
	})
	test('adding one item to the left', () => {
		binaryTree.insert(30)
		binaryTree.insert(18)
		expect(binaryTree.left.value).toEqual(30)
		expect(binaryTree.left.left.value).toEqual(18)
	})
})