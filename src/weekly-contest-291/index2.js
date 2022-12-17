/**
 * @param {number[]} cards
 * @return {number}
 */
var minimumCardPickup = function (cards) {
    const st = cards.reduce((acc, val, index) => {
        if (acc[val]) {
            acc[val].push(index)
        } else {
            acc[val] = [index]
        }
        return acc
    }, {})
    const toCompare = Object.entries(st)
        .filter((entry) => {
            return entry[1].length > 1
        })
        .map((entry) => {
            const [flag, appear] = entry
            let minDelta = Number.MAX_VALUE
            for (let i = 0; i < appear.length - 1; i++) {
                minDelta = Math.min(minDelta, appear[i + 1] - appear[i] + 1)
            }
            return { flag, minDelta }
        })
    if (toCompare.length === 0) {
        return -1
    }
    const ret = toCompare.map((t) => t.minDelta).sort((n1, n2) => n1 - n2)
    return ret[0]
}

module.exports = minimumCardPickup
