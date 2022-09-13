/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function (num) {
    const split = n => (n < 10 ? [n] : [...split(Math.floor(n / 10)), n % 10]);

    const getIndexOfMaxValue = array =>
        array.reduce((acc, v, index, arr) => (v >= arr[acc] ? index : acc), 0);

    // 如果 arr[0] 最大，则处理 arr[1:]
    // 处理过程：
    //    把 a[0] 和 max 交换
    const swap = (array, head) => {
        if (array.length === 1) {
            return array;
        }
        const remain = array.slice(1);
        const index = getIndexOfMaxValue(remain);
        if (array[0] >= remain[index]) {
            return [array[0], ...swap(remain, head + 1)];
        }
        return [
            remain[index],
            ...remain.map((value, i) => (i == index ? array[0] : value)),
        ];
    };
    return swap(split(num), 0).reduce(
        (acc, v, index, arr) => acc + 10 ** (arr.length - index - 1) * v,
        0
    );
};

module.exports = maximumSwap;
