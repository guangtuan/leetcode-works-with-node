function numOfSubarrays(arr: number[], k: number, threshold: number): number {
    let ans = 0
    let currentSum = 0
    const edge = k * threshold
    for (let i = 0; i < arr.length; i++) {
        // 窗口为 3 的情况下 i = 0,1 不足窗口大小 都不需要继续往下走
        currentSum += arr[i]
        if (i < k - 1) {
            continue
        }
        if (currentSum >= edge) {
            ans += 1
        }
        // 当i==2 窗口为3的情况下,要去掉 idx=0 的值
        // 即每次 for 的结尾要把窗口变为 `k - 1` 的大小
        currentSum -= arr[i - k + 1]
    }
    return ans
}

const numOfSubarrays2 = (
    arr: number[],
    k: number,
    threshold: number,
): number => {
    const edge = k * threshold
    const check = (
        pre: number, // 窗口内的数据 (当前是 k - 1 等待循环内的进入动作)
        left: number, // 窗口左边
        right: number, // 窗口右边
    ): number => {
        if (right === arr.length) {
            return 0
        }
        const sum = pre + arr[right]
        return (
            (sum >= edge ? 1 : 0) + check(sum - arr[left], left + 1, right + 1)
        )
    }
    return check(
        arr.slice(0, k - 1).reduce((acc: number, v: number) => acc + v, 0),
        0,
        k - 1,
    )
}

module.exports = {
    numOfSubarrays,
    numOfSubarrays2,
}
