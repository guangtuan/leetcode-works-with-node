function hammingWeight(n: number): number {
    let ans = 0
    for (let i = 31; i >= 0; i--) {
        ans += (n >> i) & 1
    }
    return ans
}

module.exports = hammingWeight
