function subsets(nums: number[]): number[][] {
    let ans: number[][] = []
    let n = nums.length
    let path: number[] = []
    const dfs = (i: number) => {
        if (i === n) {
            ans.push([...path])
        } else {
            // 不选择数字加入子集
            dfs(i + 1)

            // 选择数字加入子集
            path.push(nums[i])
            dfs(i + 1)
            // 选择的情况下，要恢复现场
            path.pop()
        }
    }
    dfs(0)
    return ans
}

module.exports = subsets
