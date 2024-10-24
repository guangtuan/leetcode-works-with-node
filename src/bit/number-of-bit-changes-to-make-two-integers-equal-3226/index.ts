function minChanges(n: number, k: number): number {
    // 逐个 bit 位进行比较
    // n-bit == k-bit 不理会
    // n-bit != k-bit
    // n-bit == 1; ans += 1
    // n-bit == 0; return -1
    const bitLength = Math.floor(Math.log2(Math.max(n, k))) + 1;
    let ans = 0;
    for (let i = bitLength - 1; i >= 0; i--) {
        const nBit = (n >> i) & 1;
        const kBit = (k >> i) & 1;
        if (nBit == kBit) {
            continue;
        }
        if (nBit == 1) {
            ans += 1;
        } else {
            return -1;
        }
    }
    return ans;
};

module.exports = minChanges;
