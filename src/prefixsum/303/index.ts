class NumArray {
    sum: number[]

    constructor(nums: number[]) {
        this.sum = [nums[0]]
        for (let i = 1; i < nums.length; i++) {
            this.sum[i] = this.sum[i - 1] + nums[i]
        }
    }

    sumRange(left: number, right: number): number {
        return this.sum[right] - (this.sum[left - 1] || 0)
    }
}

module.exports = NumArray
