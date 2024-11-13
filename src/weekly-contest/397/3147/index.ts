function maximumEnergy(energy: number[], k: number): number {
    let split = Array(k)
        .fill(null)
        .map((_it) => [])
    // 数字被跳跃地分成 k 组
    for (let i = 0; i < energy.length; i++) {
        split[i % k].push(energy[i])
    }
    // 因为要求跳跃到数组末尾，因此：倒过来计算前缀和，max(sum[i]) 即为结果
    const sumMaxRange = (reversed: number[]): number => {
        const sum = [reversed[0]]
        for (let i = 1; i < reversed.length; i++) {
            sum[i] = sum[i - 1] + reversed[i]
        }
        return Math.max(...sum)
    }
    // 针对每一组计算出最大能量
    return Math.max(
        ...split.map((arr) => arr.reverse()).map((arr) => sumMaxRange(arr)),
    )
}

module.exports = maximumEnergy
