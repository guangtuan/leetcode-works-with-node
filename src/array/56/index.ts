function merge(intervals: number[][]): number[][] {
    const sorted = intervals.sort((a, b) => a[0] - b[0])
    // 排序后的区间: [[1,3],[2,6],[8,10],[15,18]]
    const ans = [sorted.shift()]
    for (let ele of sorted) {
        // 每次使用答案的最后一个元素来合并 待合并元素
        let tail = ans[ans.length - 1]
        if (tail[1] >= ele[0]) {
            // 吞并下一个区间
            // case1 [1,3] merge [2,6]
            // case2 [1,3] merge [2,2]
            tail[1] = Math.max(ele[1], tail[1])
        } else {
            // 无法合并，则把当前区间放进数组，下一个迭代用的是 ele
            ans.push(ele)
        }
    }
    return ans
}

module.exports = merge
