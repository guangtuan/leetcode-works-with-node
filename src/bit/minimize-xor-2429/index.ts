function minimizeXor(num1: number, num2: number): number {
    const toBitArray = (num: number): number[] => {
        let result = []
        let work = num
        do {
            result.unshift(work & 1)
            work = work >> 1
        } while (work > 0)
        return result
    }
    let arr1 = toBitArray(num1)
    let arr2 = toBitArray(num2)
    /**
     * 0 先计算出可用的 2 的数量
     * 1 从高到低 分配 1 来覆盖 num1 已有的 1
     * 2 从低到高 分配 1 来覆盖 num1 已有的 0
     * 3 如果还有多余，则把 1 放到数组的最前面
     *
     * 如
     * raw: 1 0 1 0 1 // 从 num2 得来有4个可用的1
     * st1: 0 0 1 0 1 high -> low
     * st2: 0 0 0 0 1 high -> low
     * st3: 0 0 0 0 0 high -> low
     * st4: 0 0 0 1 0 low -> high
     */
    let pos1 = []
    let pos0 = []
    // 算出 num1 0 的位置和 1 的位置
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === 1) {
            pos1.push(i)
        }
        if (arr1[i] === 0) {
            pos0.unshift(i)
        }
    }
    // 拿出可用的 1
    let bucket = arr2.filter((it) => it == 1)
    const fill = (bucket: number[], pos0: number[], pos1: number[]) => {
        let ans = Array(arr1.length).fill(0)
        for (let pos of pos1) {
            if (bucket.length === 0) {
                return ans
            }
            ans[pos] = bucket.pop()
        }
        for (let pos of pos0) {
            if (bucket.length === 0) {
                return ans
            }
            ans[pos] = bucket.pop()
        }
        while (bucket.length !== 0) {
            ans.unshift(bucket.pop())
        }
        return ans
    }
    const ans = fill(bucket, pos0, pos1)
    return ans.reduceRight(
        (acc: number, val: number, idx: number) =>
            (val << (ans.length - 1 - idx)) | acc,
        0,
    )
}

module.exports = minimizeXor
