
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minBitwiseArray = function(nums) {
    // 获取一个数字的二进制表示
    // 这个二进制里会包含n个1和m个0,按从左到右的顺序 replace(1).with(0),进行验证
    const toAns = bitArray => {
        return bitArray.reduce((acc, val, idx, array) => {
            return acc + Math.pow(2, array.length - idx - 1) * val;
        }, 0);
    }
    const getAnswer = (num) => {
        const bits = num.toString(2).split("").map(it => Number.parseInt(it));
        for (let i = 0; i <= bits.length; i++) {
            if (bits[i] === 1) {
                const copyOf = [...bits];
                copyOf[i] = 0;
                const ans = toAns(copyOf);
                if ((ans | (ans + 1)) === num) {
                    return ans;
                }
            }
        }
        return -1;
    }
    return nums.map(it => getAnswer(it));
};

module.exports = minBitwiseArray;