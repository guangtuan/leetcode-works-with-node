function maxSum(nums: number[], m: number, k: number): number {
    // 设计一个结构，表达题目描述中 至少m个不重复元素的数组
    const almostUniqueArray = (
        atLeast: number,
    ): {
        // 加入数字
        push: (key: number) => undefined
        // 去掉数字
        remove: (key: number) => undefined
        // 是否符合条件
        match: () => boolean
        // 获取总和
        sum: () => number
    } => {
        let holder = new Map<number, number>()
        let sum = 0
        return {
            sum: (): number => sum,
            match: (): boolean => holder.size >= atLeast,
            push: (key: number) => {
                if (!holder.has(key)) {
                    holder.set(key, 0)
                }
                holder.set(key, holder.get(key) + 1)
                sum += key
            },
            remove: (key: number) => {
                const decreased = holder.get(key) - 1
                if (decreased === 0) {
                    holder.delete(key)
                } else {
                    holder.set(key, decreased)
                }
                sum -= key
            },
        }
    }
    const array = almostUniqueArray(m)
    let ans = 0
    for (let i = 0; i < nums.length; i++) {
        array.push(nums[i])
        if (i < k - 1) {
            continue
        }
        if (array.match()) {
            ans = Math.max(ans, array.sum())
        }
        array.remove(nums[i - k + 1])
    }
    return ans
}

module.exports = maxSum
