function hammingDistance(x: number, y: number): number {
    const count1Bit = (num: number) => {
        let result = 0;
        while (num > 0) {
            num = (num & (num - 1));
            result++;
        }
        return result;
    }
    return count1Bit((x ^ y));
};

module.exports = hammingDistance;
