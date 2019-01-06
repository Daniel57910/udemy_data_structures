class BinaryTree {
	constructor(value) {
		this.value = value,
		this.right = this.left = null
	}

	insert(data, root) {
		if (data <= root.value) {
			!root.left ? root.left = new BinaryTree(data) : this.insert(data, root.left)
		}
		else {
			!root.right ? root.right = new BinaryTree(data) : this.insert(data, root.right)
		}
	}

	depthFirst(searchItem, root) {
		if (!root) return false
		if (root.value === searchItem) return true
		if (searchItem <= root.value) return this.depthFirst(searchItem, root.left)
		return this.depthFirst(searchItem, root.right)
	}
}
			
	




module.exports = BinaryTree