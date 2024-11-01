function searchInsert(nums: number[], target: number): number {
    let left = 0
    let right = nums.length - 1
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (nums[mid] == target) {
            return mid
        } else {
            // 小，左边区间排除
            if (nums[mid] < target) {
                left = mid + 1
            // 大，右边区间排除
            } else {
                right = mid -1
            }
        }
    }
    return left
};
