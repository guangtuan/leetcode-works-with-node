class RangeFreqQuery {
    m: Record<number, number[]> = {}
    constructor(arr: number[]) {
        for (let i = 0; i < arr.length; i++) {
            const ele = arr[i]
            this.m[ele] = this.m[ele] || []
            this.m[ele].push(i)
        }
    }

    query(left: number, right: number, value: number): number {
        const indices = this.m[value]
        if (!indices) {
            return 0
        }
        return (
            this.lowerBound(indices, right + 1) - this.lowerBound(indices, left)
        )
    }

    lowerBound(a: number[], target: number): number {
        // 开区间 (left, right)
        let left = -1
        let right = a.length
        while (left + 1 < right) {
            // 区间不为空
            // 循环不变量：
            // a[left] < target
            // a[right] >= target
            let mid = (left + right) >>> 1
            if (a[mid] < target) {
                left = mid // 范围缩小到 (mid, right)
            } else {
                right = mid // 范围缩小到 (left, mid)
            }
        }
        return right // right 是最小的满足 a[right] >= target 的下标
    }
}

module.exports = RangeFreqQuery
