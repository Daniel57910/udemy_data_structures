const BinaryTree = require('../lib/btree_2')

describe('Basic Binary Search Tree', () => {
	beforeEach(() => {
		binaryTree = new BinaryTree(50)
	})
	test('instantiation of the basic binary search tree', () => {
		expect(binaryTree.value).toEqual(50)
		expect(binaryTree.left).toEqual(null)
		expect(binaryTree.right).toEqual(null)
	})
	test('adding two items to the left', () => {
		binaryTree.insert(30, binaryTree)
		binaryTree.insert(18, binaryTree)
		expect(binaryTree.left.value).toEqual(30)
		expect(binaryTree.left.left.value).toEqual(18)
	})
	test('adding items to the left and right', () => {
		binaryTree.insert(18, binaryTree)
		binaryTree.insert(27, binaryTree)
		binaryTree.insert(90, binaryTree)
		binaryTree.insert(81, binaryTree)
		binaryTree.insert(67, binaryTree)
		expect(binaryTree.right.value).toEqual(90)
		expect(binaryTree.right.left.value).toEqual(81)
		expect(binaryTree.right.left.left.value).toEqual(67)
		expect(binaryTree.left.right.value).toEqual(27)
	})
})

describe(`Depth First Search`, () => {
	beforeEach(() => {
		binaryTree = new BinaryTree(50)
	})
	test(`basic depth first search for the smallest value`, () => {
		let result = binaryTree.depthFirst(50, binaryTree)
		expect(result).toBe(true)

		binaryTree.insert(32, binaryTree)
		binaryTree.insert(18, binaryTree)
		binaryTree.insert(9, binaryTree)
		expect(binaryTree.depthFirst(9, binaryTree)).toEqual(true)

	})
})