function successfulPairs(
    spells: number[],
    potions: number[],
    success: number,
): number[] {
    /**
     * potions 按照从小到大的顺序排列
     *
     * 迭代每一个 spell,
     * 迭代排序后的 potions 求出第一个符合 success 的 i
     *
     * case1 常规情况
     * > ans[i] = potions.length - l
     * case2 一个都不符合 success，则 l = potions.length
     * > ans[i] = 0
     *
     * 例子
     * success = 11
     * potions = [1,4,4,4,4,5]
     * spell = 3
     *
     * spell * potion = [3, 12, 12, 12, 12, 15]
     *                   l      m           r
     *                   l  m   r
     *                   lmr
     * 不符合的区间是 [0, 0] 则剩余区间的 left = 0 + 1
     *
     */
    const sorted = potions.sort((a: number, b: number): number => a - b)
    const firstSuccessIndex = (spell: number): number => {
        const fn = (left: number, right: number) => {
            if (left > right) {
                return left
            }
            let mid = Math.floor((right + left) / 2)
            if (sorted[mid] * spell >= success) {
                return fn(left, mid - 1)
            } else {
                return fn(mid + 1, right)
            }
        }
        return fn(0, potions.length - 1)
    }
    return spells
        .map((spell: number) => firstSuccessIndex(spell))
        .map((firstSuccessIndex: number) => potions.length - firstSuccessIndex)
}

module.exports = successfulPairs
