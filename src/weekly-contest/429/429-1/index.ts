function minimumOperations(nums: number[]): number {
    // 移除 leading-3 elements 剩下不重复

    // 倒过来，当 st 里有重复项的时候，则表明需要移除
    // 计算 i / 3 为结果

    const st = new Set()
    for (let i = nums.length - 1; i >= 0; i--) {
        const ele = nums[i]
        if (st.has(ele)) {
            return Math.ceil((i + 1) / 3)
        }
        st.add(ele)
    }
    return 0
}

module.exports = minimumOperations
