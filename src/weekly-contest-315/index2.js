/**
 * @param {number[]} nums
 * @return {number}
 */
var countDistinctIntegers = function (nums) {
    const eachBit = (number) => {
        if (number < 10) {
            return [number]
        }
        const mod = number % 10
        return [mod, ...eachBit(Math.floor(number / 10))]
    }
    const reverse = (() => {
        const cache = {}
        return (n) => {
            if (cache[n]) {
                return cache[n]
            }
            const bits = eachBit(n)
            let res = 0
            let len = bits.length - 1
            for (let i of bits) {
                res += 10 ** len * i
                len--
            }
            cache[n] = res
            return res
        }
    })()
    const set = new Set()
    for (let num of nums) {
        set.add(num)
        console.log(`reverse ${num} to ${reverse(num)}`)
        set.add(reverse(num))
    }
    return set.size
}

module.exports = countDistinctIntegers
