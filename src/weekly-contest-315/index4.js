/**
 * @param {number[]} nums
 * @param {number} minK
 * @param {number} maxK
 * @return {number}
 */
var countSubarrays = function (nums, minK, maxK) {
    // 1 子数组：数组中连续的一部分
    // 2 数组符合条件为 max(array) == maxK, min(array) == minK
    // 3 定 f(i, j) 为从 i 到 j 子数组是否符合条件
    // f(i, j) =
    //     f(i, j-1) == true  ? (array[j] < maxK || array[i] > minK)
    //     f(i, j-1) == false ? (array[j] == maxK || array[i] == minK)
    // 两重 for 迭代得到, return count(f[i][j] == true)
    // 使用前缀和计算 min[i][j] max[i][j]
    const maxOnIJ = []
    const minOnIJ = []
    const fill = []
    for (let i = 0; i < nums.length; i++) {
        maxOnIJ[i] = [...fill, nums[i]]
        minOnIJ[i] = [...fill, nums[i]]
        for (let j = i + 1; j < nums.length; j++) {
            // console.log(`${JSON.stringify({ i, j })}, comp ${nums[j]}, and ${maxOnIJ[i][j - 1]}`)
            if (nums[j] > maxOnIJ[i][j - 1]) {
                maxOnIJ[i][j] = nums[j]
            } else {
                maxOnIJ[i][j] = maxOnIJ[i][j - 1]
            }
            if (nums[j] < minOnIJ[i][j - 1]) {
                minOnIJ[i][j] = nums[j]
            } else {
                minOnIJ[i][j] = minOnIJ[i][j - 1]
            }
        }
        fill.push(null)
    }
    const ret = []
    let res = 0
    for (let i = 0; i < nums.length; i++) {
        ret[i] = []
        for (let j = i; j < nums.length; j++) {
            if (ret[i][j - 1]) {
                ret[i][j] = nums[j] <= maxK && nums[j] >= minK
            } else {
                const max = maxOnIJ[i][j]
                const min = minOnIJ[i][j]
                ret[i][j] = min === minK && max === maxK
            }
            if (ret[i][j]) {
                res++
            }
        }
    }
    return res
}

module.exports = countSubarrays
