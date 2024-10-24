function validStrings(n: number): string[] {
    const mask = (1 << n) - 1;
    const pad = (n: number) => (str: string): string => {
        return "0".repeat(n - str.length) + str;
    }
    const ans = [];
    const padn = pad(n);
    for (let i = 0; i < (1 << n); i++) {
        if ((i & (i >> 1)) === 0) {
            // 取反
            const masked = i ^ mask;
            ans.push(padn(masked.toString(2)));
        }
    }
    return ans;
};

module.exports = validStrings;
