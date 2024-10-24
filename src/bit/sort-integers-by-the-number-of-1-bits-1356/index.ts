function sortByBits(arr: number[]): number[] {
    const count1Bit = (num: number) => {
        let result = 0;
        while (num > 0) {
            num = (num & (num - 1));
            result++;
        }
        return result;
    }
    type withBitCount = { value: number, bits: number }
    return arr
        .map((value: number) => ({
            value: value,
            bits: count1Bit(value)
        }))
        .sort((a: withBitCount, b: withBitCount) => a.bits - b.bits || a.value - b.value)
        .map(ele => ele.value);
};

module.exports = sortByBits;
