function maximumEnergy(energy: number[], k: number): number {
    // 因为要求跳跃到数组末尾，因此：倒过来计算前缀和，max(sum[i]) 即为结果
    const maxPrefix = (array: number[]): number =>
        // 不需要把前缀和算到数组里，用 2 个变量即可找出最大的那个
        array.reduce(
            (
                acc: { prefix: number; result: number },
                value: number,
                index: number,
                _array: number[],
            ) => {
                if (index === 0) {
                    return acc
                }
                const current = acc.prefix + value
                return {
                    result: Math.max(acc.result, current),
                    prefix: current,
                }
            },
            { prefix: array[0], result: array[0] },
        ).result
    // 针对每一组计算出最大能量
    return Math.max(
        ...energy
            .reduce(
                (
                    acc: Array<Array<number>>,
                    value: number,
                    index: number,
                    _arr: Array<number>,
                ) => {
                    // 因为要求跳跃到数组末尾，因此：倒过来计算前缀和，这里直接把元素倒序加入
                    // max(sum[i]) 即为结果
                    acc[index % k].unshift(value)
                    return acc
                },
                // 数字被跳跃地分成 k 组
                Array(k)
                    .fill(null)
                    .map((_it) => []),
            )
            .map(maxPrefix),
    )
}

module.exports = maximumEnergy
