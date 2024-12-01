function getLargestOutlier(nums: number[]): number {
    let sorted = nums.sort((a, b) => b - a)
    const sum = sorted.reduce((acc: number, value: number) => acc + value, 0)
    const findMatch = (s: number, chooseIndex: number) => {
        if (s % 2 === 1) {
            return false
        }
        let l = 0
        let r = sorted.length - 1
        let half = s / 2
        while (l <= r) {
            let mid = Math.floor((l + r) / 2)
            if (half == sorted[mid]) {
                return mid !== chooseIndex
            }
            if (half < sorted[mid]) {
                l = mid + 1
            } else {
                r = mid - 1
            }
        }
        return false
    }
    for (let i = 0; i < sorted.length; i++) {
        const n = sorted[i]
        const s = sum - n
        if (findMatch(s, i)) {
            return n
        }
    }
    return 0
}

module.exports = getLargestOutlier
