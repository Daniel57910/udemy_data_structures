class BinaryTree {
	constructor(value) {
		this.value = value, this.right = this.left = null
	}

	insert(data, root) {
		if (data <= root.value) {
			!root.left ? root.left = new BinaryTree(data) : this.insert(data, root.left)
		}
		else {
			!root.right ? root.right = new BinaryTree(data) : this.insert(data, root.right)
		}
	}

	depthFirst(searchItem) {
		return depthFirst(searchItem, root)
	}
}


function depthFirst(searchItem, node) {
	if (!node) return false
	if (searchItem === node.value) return true
	depthFirst(searchItem, node.right)
	depthFirst(searchItem, node.left)
}
			
	




module.exports = BinaryTree