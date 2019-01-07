class BinaryTree {
	constructor(value) {
		this.value = value,
		this.right = this.left = null
	}

	insert(data) {
		if (data <= this.value) {
			!this.left ? this.left = new BinaryTree(data) : this.left.insert(data)
		}
		else {
			!this.right ? this.right = new BinaryTree(data) : this.right.insert(data)
		}
	}

	includes(data) {
		if (data === this.value) return true
		if (data < this.value && this.left) return this.left.includes(data)
		if (data > this.value && this.right) return this.right.includes(data)
		return false
	}
}


function depthFirst(searchItem, node) {
	if (!node) return false
	if (searchItem === node.value) return true
	depthFirst(searchItem, node.right)
	depthFirst(searchItem, node.left)

}
			
	




module.exports = BinaryTree