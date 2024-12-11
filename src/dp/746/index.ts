/**
 *
 * 可以从0或者1开始
 * 0   1   2   3
 * 10, 15, 20, 15
 *
 * f[0] = cost[0]
 * f[1] = min(cost[0], cost[1])
 * f[2] = min(cost[0] + cost[2], cost[1])
 * f[i] = min(f[i-2]+cost[i], f[i-3]+cost[i-1])
 */
function minCostClimbingStairs(cost: number[]): number {
    const f: number[] = [0, 0]
    for (let i = 2; i < cost.length + 1; i++) {
        f[i] = Math.min(f[i - 2] + cost[i - 2], f[i - 1] + cost[i - 1])
    }
    return f[f.length - 1]
}

module.exports = minCostClimbingStairs
