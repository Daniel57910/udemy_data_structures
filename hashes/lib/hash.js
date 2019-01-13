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
  hashTheKey(string) {
    /*string returns ASCI val of character which is 65 > 0*/
    return (string.charCodeAt(0) - 65)
  }
  insert(key, value) {
    /*destructures string object to gain value to create dynamic key*/
    this.bucket[this.hashTheKey(key)].push({[key]: value})
  }

}

module.exports = HashMap