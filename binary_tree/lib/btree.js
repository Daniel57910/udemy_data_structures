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

	breadthFirst(arr, queue) {
		arr.push(this.value)
		if (this.left) queue.push(this.left)
		if (this.right) queue.push(this.right)
		if (queue[0]) queue.shift().breadthFirst(arr, queue)
	}

	breadthFirstIterator(arr) {
		let queue = [this]
		while (queue.length > 0) {
			let current = queue.shift()
			arr.push(current.value)
			if (current.left) queue.push(current.left)
			if (current.right) queue.push(current.right)
		}
	}

	getMinVal() {
		let current = this
		while(current) {
			if (current.left) current = current.left
			else return current.value
		}
	}
	getMaxVal() {
		let current = this
		while (current) {
			if (current.right) current = current.right
			else return current.value
		}
	}

	getMinRec() {
		if (!this.left) return this.value
		return this.left.getMinRec()
	}

	getMaxRec() {
		if (!this.right) return this.value
		return this.right.getMaxRec()
	}

}







module.exports = BinaryTree