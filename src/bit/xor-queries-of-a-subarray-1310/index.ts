function xorQueries(arr: number[], queries: number[][]): number[] {
    /**
     * 0 1 2 3 4 5
     *
     * xor(l, r) = xor(0, l - 1) ^ xor(0, r)
     *
     * exp:
     *
     * xor(3, 5) = xor(0, 2) ^ xor(0, 5)
     * 1: 二者重叠部分等于 a ^ b ^ b ^ a = 0
     * 2: 0 ^ anyNumber = anyNumber
     */
    const prefixSum = [arr[0]]
    for (let i = 1; i < arr.length; i++) {
        prefixSum[i] = prefixSum[i - 1] ^ arr[i]
    }
    const query = (left: number, right: number) =>
        prefixSum[left - 1] ^ prefixSum[right]
    return queries.map((v) => query(v[0], v[1]))
}

module.exports = xorQueries
