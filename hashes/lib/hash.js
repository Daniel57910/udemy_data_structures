class HashMap {
  constructor() {
    this.bucket = []
  }
  returnBucket() {
    return this.bucket
  }
  createBucket() {
    for (let i = 0; i < 26; i++) {
      this.bucket[i] = []
    }
  }

}

module.exports = HashMap