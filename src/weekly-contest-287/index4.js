var Encrypter = function (keys, values, dictionary) {
    this.keys = keys
    this.values = values
    this.dictionary = dictionary
    this.keysLookup = this.keys.reduce((acc, currValue, currIndex) => {
        acc[currValue] = this.values[currIndex]
        return acc
    }, {})
}

Encrypter.prototype.encrypt = function (word1) {
    let parts = word1.split('').map((c) => this.keysLookup[c])
    if (parts.some((p) => !p)) {
        return null
    }
    return parts.join('')
}

Encrypter.prototype.decrypt = function (word2) {
    return this.dictionary
        .map((s) => this.encrypt(s))
        .filter((s) => s === word2).length
}

module.exports = Encrypter
