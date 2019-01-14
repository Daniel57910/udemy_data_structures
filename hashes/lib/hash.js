class HashMap {
  constructor() {
    this.bucket = []
    this.power = 7
    this.modulo = 26
    this.hashTheKey
  }

  returnBucket() {
    return this.bucket
  }
  createBucket() {
    for (let i = 0; i < 26; i++) {
      this.bucket[i] = []
    }
  }

  createHash(type = "simple") {
    type === "simple" ? this.hashTheKey = this.simpleHash : this.hashTheKey = this.complexHash
  }

  insert(key, value) {
    /*inserts the k -> v pair in correct location in bucket array*/
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

  simpleHash(string) {
    return (string.toString().charCodeAt(0) - 65)
  }

  complexHash(string) {
    let sum = 0, count = 0
    for (let character in string) {
      sum += (this.power * count) ** (string.charCodeAt(character) - 65)
      count++
    }
    return sum % this.modulo
  }


}






module.exports = HashMap