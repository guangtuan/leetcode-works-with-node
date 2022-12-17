var ATM = function () {
    this.inner = [0, 0, 0, 0, 0]
}

const sizes = [
    [0, 20],
    [1, 50],
    [2, 100],
    [3, 200],
    [4, 500],
]

/**
 * @param {number[]} banknotesCount
 * @return {void}
 */
ATM.prototype.deposit = function (banknotesCount) {
    for (let i in this.inner) {
        this.inner[i] = this.inner[i] + banknotesCount[i]
    }
}

function handle(atm, input) {
    let rollback = [...atm.inner]
    let ret = [0, 0, 0, 0, 0]
    for (let i = sizes.length - 1; i >= 0; i--) {
        let [idx, size] = sizes[i]
        if (input >= size) {
            let req = Math.floor(input / size)
            if (req <= atm.inner[idx]) {
                ret[idx] = req
                atm.inner[idx] = atm.inner[idx] - req
            } else {
                ret[idx] = atm.inner[idx]
                atm.inner[idx] = 0
            }
            input = input - ret[idx] * size
        }
        if (input == 0) {
            return ret
        }
    }
    atm.inner = rollback
    return [-1]
}

/**
 * @param {number} amount
 * @return {number[]}
 */
ATM.prototype.withdraw = function (amount) {
    let input = amount
    return handle(this, input)
}

/**
 * Your ATM object will be instantiated and called as such:
 * var obj = new ATM()
 * obj.deposit(banknotesCount)
 * var param_2 = obj.withdraw(amount)
 */

module.exports = ATM
