function countBits(n: number): number[] {
    const count1Bit = (num: number): number => {
        let count = 0;
        while(num > 0) {
            // 将 num 的最后一个 bit 位变成 0
            num = num & (num - 1)
            count++;
        }
        return count;
    }
    return Array(n + 1).fill(0).map((_value, index) => count1Bit(index));
};

module.exports = countBits;
