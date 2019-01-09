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
	test('adding two items to the left', () => {
		binaryTree.insert(30)
		binaryTree.insert(18)
		expect(binaryTree.left.value).toEqual(30)
		expect(binaryTree.left.left.value).toEqual(18)
	})
	test('adding items to the left and right', () => {
		binaryTree.insert(18)
		binaryTree.insert(27)
		binaryTree.insert(90)
		binaryTree.insert(81)
		binaryTree.insert(67)
		expect(binaryTree.right.value).toEqual(90)
		expect(binaryTree.right.left.value).toEqual(81)
		expect(binaryTree.right.left.left.value).toEqual(67)
		expect(binaryTree.left.right.value).toEqual(27)
	})
})

describe(`Depth First Search`, () => {
	beforeEach(() => {
		binaryTree = new BinaryTree(50)
		binaryTree.insert(32)
		binaryTree.insert(18)
		binaryTree.insert(9)
		binaryTree.insert(67)
		binaryTree.insert(81)
		binaryTree.insert(96)
		binaryTree.insert(95)
		binaryTree.insert(27)
		binaryTree.insert(11)
		binaryTree.insert(46)
		binaryTree.insert(53)
		binaryTree.insert(72)
	})
	test(`basic depth first search for the smallest value`, () => {
		expect(binaryTree.includes(9)).toEqual(true)
		expect(binaryTree.includes(32)).toEqual(true)
		expect(binaryTree.includes(18)).toEqual(true)
	})
	test(`basic depth first search for the largest value`, () => {
		expect(binaryTree.includes(96)).toEqual(true)
		expect(binaryTree.includes(95)).toEqual(true)
		expect(binaryTree.includes(101)).toEqual(false)
	})
})

describe(`random insertions into a binary tree`, () => {
	beforeEach(() => {
		arr = []
		for (let i = 0; i < 10000; i++) {
			arr.push(Math.floor(Math.random() * 100000))
		}
		binaryTree = new BinaryTree(5000)
		for (i of arr) {
			binaryTree.insert(i)
		}
	})
	test(`random insertions`, () => {
		for (i of arr) {
			expect(binaryTree.includes(i)).toEqual(true)
		}
		expect(binaryTree.includes(-10)).toEqual(false)
	})
})

describe(`basic value, left, right depth first traversal`, () => {
	beforeEach(() => {
		binaryTree = new BinaryTree(5)
		binaryTree.insert(2)
		binaryTree.insert(3)
		binaryTree.insert(1)
		binaryTree.insert(4)
		binaryTree.insert(7)
		binaryTree.insert(6)
	})
	test(`traversal by popping the elements into the array`, () => {
		let arr = []
		binaryTree.depthFirst(arr)
		expect(arr).toEqual([5, 2, 1, 3, 4, 7, 6])
	})
})

describe(`depth first in order`, () => {
	test(`basic assertion of leftward traversal`, () => {
		let testElements = [12, 6, 3, 2, 1], binaryTree = new BinaryTree(10), dataArray = []
		testElements.map(element => binaryTree.insert(element))
		testElements.push(10)
		testElements.sort((a, b) => a - b)
		binaryTree.depthFirstInOrder(dataArray)
		expect(dataArray).toEqual(testElements)
	})
	test(`more complex assertion of random elements`, () => {
		let binaryTree = new BinaryTree(10), dataArray = [], testArray = []
		addDataToTree(binaryTree, dataArray, 20)
		binaryTree.depthFirstInOrder(testArray)
		expect(testArray).toEqual(dataArray.sort((a, b) => a - b))
	})
	test(`large assertion of n length array`, () => {
		let binaryTree = new BinaryTree(50000), dataArray = [], testArray = []
		addDataToTree(binaryTree, dataArray, 100000)
		binaryTree.depthFirstInOrder(testArray)
		expect(testArray).toEqual(dataArray.sort((a, b) => a - b))
	})
})

describe(`breadth first search`, () => {
	test(`basic breadth first search test`, () => {
		let binaryTree = new BinaryTree(10), dataArray = [], queue = []
		binaryTree.insert(6)
		binaryTree.insert(12)
		binaryTree.insert(3)
		binaryTree.insert(7)
		binaryTree.insert(11)
		binaryTree.breadthFirst(dataArray, queue)
		expect(dataArray).toEqual([10, 6, 12, 3, 7, 11])
	})
})

function addDataToTree(binaryTree, dataArray, n) {
	for (let i = 0; i < n; i++) {
		dataArray.push(Math.floor(Math.random() * n))
	}
	dataArray.map(data => binaryTree.insert(data))
	dataArray.push(n / 2)
}