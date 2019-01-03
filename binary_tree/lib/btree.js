class BinaryTree {
	constructor(value) {
		this.value = value
		this.right = this.left = null
	}

	insert(data) {
		if (data <= this.value) {
			if (!this.left) {
				this.left = new BinaryTree(data)
				return
			}
			else {
				this.value = this.left.value
				this.insert(value)
			}
		}
		else {
			if (!this.right) {
				this.right = new BinaryTree(data)
				return
			}
			else {
				this.right = this.right.value
				this.insert(value)
			}
		}
	}
			
	

}


module.exports = BinaryTree