function countValidSelections(nums: number[]): number {
    let valid = (working: number[], init: number, step: -1 | 1): boolean => {
        let currentStep = step
        let position = init
        while (true) {
            if (position < 0 || position > working.length - 1) {
                break
            }
            if (working[position] !== 0) {
                working[position] -= 1
                currentStep = currentStep * -1
            }
            position += currentStep
        }
        return working.every((it) => it === 0)
    }
    let ans = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            if (valid([...nums], i, -1)) {
                ans += 1
            }
            if (valid([...nums], i, 1)) {
                ans += 1
            }
        }
    }
    return ans
}

module.exports = countValidSelections
