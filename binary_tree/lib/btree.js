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

	depthFirst(arr) {
		arr.push(this.value)
		if (this.left) this.left.depthFirst(arr)
		if (this.right) this.right.depthFirst(arr)
	}

	depthFirstInOrder(arr) {
		if (this.left) this.left.depthFirstInOrder(arr)
		arr.push(this.value)
		if (this.right) this.right.depthFirstInOrder(arr)
	}

}







module.exports = BinaryTree