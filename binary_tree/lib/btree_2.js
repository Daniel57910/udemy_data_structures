class BinaryTree {
	constructor(value) {
		this.value = value
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
}
			
	




module.exports = BinaryTree