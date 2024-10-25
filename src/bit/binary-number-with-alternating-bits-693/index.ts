function hasAlternatingBits(n: number): boolean {
    // 没有连续的 0或者1，和右移后的元素进行异或，得到的是全 1 的数字
    const x = n ^ (n >> 1)
    // pattern of 111111....1
    // 验证是否全1
    return (x & (x + 1)) === 0
}

const fn2 = (n: number): boolean => {
    const getBitCount = (m: number): number => {
        if (m === 0) {
            return 1
        }
        return Math.floor(Math.log2(m)) + 1
    }
    console.log(`n is ${n.toString(2)}, and test ${(n ^ (n >> 1)).toString(2)}`)
    // 没有相邻的1
    if ((n & (n >> 1)) === 0) {
        const mask = Math.pow(2, getBitCount(n)) - 1
        const re = n ^ mask
        // 取反后再次 验证有没有相邻的 1
        return (re & (re >> 1)) === 0
    }
    return false
}

module.exports = hasAlternatingBits
