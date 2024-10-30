const getBitLength = (num: number): number => {
    if (num === 0) {
        return 1
    }
    return Math.floor(Math.log2(num)) + 1
}

const toBitArray = (num: number): number[] => {
    let result = []
    let work = num
    do {
        result.unshift(work & 1)
        work = work >> 1
    } while (work > 0)
    return result
}

const getBitLength2 = (num: number): number => {
    if (num === 0) {
        return 1
    }
    let result = 0
    while (num > 0) {
        result++
        num = num >> 1
    }
    return result
}

const invert = (n: number): number => {
    const len = getBitLength(n)
    const mask = (1 << len) - 1
    return n ^ mask
}

const count1Bit = (num: number) => {
    let result = 0
    while (num > 0) {
        num = num & (num - 1)
        result++
    }
    return result
}

const count1Bit2 = (num: number) => {
    if (num === 0) {
        return 0
    }
    let result = 0
    while (num > 0) {
        result += num & 1
        num = num >> 1
    }
    return result
}

const lowbit = (num: number): number => {
    /**
     *  s = 101100
     * ~s = 010011
     * (~s)+1 = 010100 // 根据补码的定义，这就是 -s  =>  s 的最低 1 左侧取反，右侧不变
     * s & -s = 000100 // lowbit
     */
    return num & (-1 * num)
}

const lowbit2 = (num: number): number => {
    /**
     * s      = 101100 raw
     * ~s     = 010011 取反
     * (~s)+1 = 010100 取反+1
     * s & -s = 000100 // lowbit
     */
    const inverted = invert(num)
    return num & (inverted + 1)
}

module.exports = {
    toBitArray,
    lowbit,
    lowbit2,
    count1Bit,
    count1Bit2,
    getBitLength,
    getBitLength2,
    invert,
}
