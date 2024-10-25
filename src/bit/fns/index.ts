const getBitLength = (num: number): number => {
    if (num === 0) {
        return 1
    }
    return Math.floor(Math.log2(num)) + 1
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

module.exports = {
    count1Bit,
    count1Bit2,
    getBitLength,
    getBitLength2,
    invert,
}
