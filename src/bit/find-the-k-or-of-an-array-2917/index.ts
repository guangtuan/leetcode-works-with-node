function findKOr(nums: number[], k: number): number {
    const getBitCount = (m: number): number => {
        if (m === 0) {
            return 1
        }
        return Math.floor(Math.log2(m)) + 1
    }
    const bitCount = getBitCount(Math.max(...nums))
    const ansBits = Array(bitCount).fill(0)
    for (let num of nums) {
        for (let i = 0; i < bitCount; i++) {
            ansBits[bitCount - i - 1] += (num >> i) & 1
        }
    }
    let ans = 0
    for (let i = 0; i < bitCount; i++) {
        let ele = ansBits[i]
        if (ele >= k) {
            ans = ans | (1 << (bitCount - i - 1))
        }
    }
    return ans
}

module.exports = findKOr
