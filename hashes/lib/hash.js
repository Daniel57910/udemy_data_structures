class HashMap {
  constructor() {
    this.bucket = []
    this.power = 7
    this.modulo = 23
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
    /*string returns ASCI val of character which is 65 > 0. to string used to avoid failure on non string insertions*/
    return (string.toString().charCodeAt(0) - 65)
  }
  insert(key, value) {
    /*destructures string object to gain value to create dynamic key*/
    this.bucket[this.hashTheKey(key)].push({key: key, value: value})
  }

  find(key) {
    if (!this._exists(key)) return 'DOES NOT EXIST'
    return this.bucket[this.hashTheKey(key)].find(k => k.key === key).value
  }

  _exists(key) {
    return this.bucket[this.hashTheKey(key)].length
  }

  remove(key) {
    if (!this._exists(key)) return 'DOES NOT EXIST'
    this.bucket[this.hashTheKey(key)] = this.bucket[this.hashTheKey(key)].filter(k => k.key !== key)
  }

  generateComplexHash(key) {
    let sum = 0, count = 1
    for (let item of key) {
      sum += (this.power * count) ** (item.charCodeAt(0) - 64)
      count++
    }
    return sum % this.modulo
  }

}

module.exports = HashMap