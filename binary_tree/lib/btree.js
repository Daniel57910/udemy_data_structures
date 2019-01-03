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
				this.left.insert(data)
			}
		}
		else {
			if (!this.right) {
				this.right = new BinaryTree(data)
				return
			}
			else {
				this.right.insert(data)
			}
		}
	}
			
	

}


module.exports = BinaryTree