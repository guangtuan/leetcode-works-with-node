/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function (num) {
    const toEachBit = num => {
        let curr = num;
        let ret = [];
        while (curr) {
            ret.unshift(curr % 10);
            curr = Math.floor(curr / 10);
        }
        return ret;
    };

    const getIndexOfMaxValue = (array, head) => {
        let ret = head + 1;
        let max = array[ret];
        for (let i = ret + 1; i < array.length; i++) {
            // 基于 `每一个大数字都很宝贵，得让他留在前面`
            // 后边如果有等于 max 的，也要成为 max
            if (array[i] >= max) {
                max = array[i];
                ret = i;
            }
        }
        return ret;
    };
    // 如果 arr[0] 最大，则处理 arr[1:]
    // 处理过程：
    //    把 a[0] 和 max 交换
    const handle = (array, head) => {
        if (head === array.length - 1) {
            return;
        }
        const index = getIndexOfMaxValue(array, head);
        if (array[head] >= array[index]) {
            handle(array, head + 1);
            return;
        }
        // swap
        [array[index], array[head]] = [array[head], array[index]];
    };
    const eachBit = toEachBit(num);
    handle(eachBit, 0);
    return eachBit.reduce(
        (acc, v, index, arr) => acc + 10 ** (arr.length - index - 1) * v,
        0
    );
};

module.exports = maximumSwap;
