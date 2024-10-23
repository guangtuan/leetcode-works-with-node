/**
 * @param {number} num
 * @return {number}
 */
function findComplement(num: number) {
    const s = (
        Array(32)
            .fill(0)
            .map((_v, index, array) => array.length - index - 1)
            .find(ele => ((num >> ele) & 1) !== 0)
    ) || -1;
    let ans = 0;
    for (let i = 0; i < s; i++) {
        // 如果该位是 0
        if (((num >> i) & 1) === 0) {
            // 0b01 | 0b10 = 0b11
            // 则填上 1
            ans |= (1 << i);
        };
    }
    return ans;
}

module.exports = findComplement
