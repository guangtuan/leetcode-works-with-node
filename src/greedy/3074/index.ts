function minimumBoxes(apple: number[], capacity: number[]): number {
    let sum = apple.reduce((acc: number, value: number) => acc + value, 0)
    const sorted = [...capacity].sort((a, b) => a - b)
    while (sum > 0) {
        const curr = sorted.pop()
        sum -= curr
    }
    return capacity.length - sorted.length
}

module.exports = minimumBoxes
