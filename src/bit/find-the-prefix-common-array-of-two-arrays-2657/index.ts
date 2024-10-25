function findThePrefixCommonArray(A: number[], B: number[]): number[] {
    const getBit1 = (m: bigint): number => {
        let bit1Count = 0
        while (m > 0) {
            if ((m & 1n) === 1n) {
                bit1Count += 1
            }
            m = m >> 1n
        }
        return bit1Count
    }
    let aValue = 0n
    let bValue = 0n
    const ans = []
    for (let i = 0; i < A.length; i++) {
        aValue += 2n << BigInt(A[i])
        bValue += 2n << BigInt(B[i])
        ans.push(getBit1(aValue & bValue))
    }
    return ans
}

module.exports = findThePrefixCommonArray
