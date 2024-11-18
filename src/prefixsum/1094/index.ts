function carPooling(trips: number[][], capacity: number): boolean {
    // 取出全部乘客数量
    const diff = Array(1001).fill(0)
    for (let [c, a, b] of trips) {
        // 上车
        diff[a] += c
        // 下车
        diff[b] -= c
    }
    let s = 0
    for (const v of diff) {
        s += v
        if (s > capacity) {
            return false
        }
    }
    return true
}

module.exports = carPooling
