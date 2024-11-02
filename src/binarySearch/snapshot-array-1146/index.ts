class SnapshotArray {
    history: Map<number, Array<Array<number>>>
    currentVersion: number

    // 想办法压缩这个数组
    /**
     * [1, 0, 0, 0] set(0, 1) & snap 0
     * [1, 0, 0, 5] set(3, 5) & snap 1
     * [2, 0, 0, 5] set(0, 2) & snap 2
     * [2, 3, 0, 5] set(1, 3) & snap 3
     */
    constructor(length: number) {
        this.history = new Map()
        this.currentVersion = 0
    }

    set(index: number, val: number): void {
        const forOneIndex = this.history.get(index)
        if (forOneIndex === undefined) {
            this.history.set(index, [])
        }
        this.history.get(index).push([this.currentVersion, val])
    }

    snap(): number {
        const ret = this.currentVersion
        this.currentVersion += 1
        return ret
    }

    get(index: number, snap_id: number): number {
        const his = this.history.get(index)
        if (his === undefined) {
            return 0
        }
        const closestSnapId = this.search(his, snap_id)
        return closestSnapId === -1 ? 0 : his[closestSnapId][1]
    }

    search(history: Array<Array<number>>, snap_id: number): number {
        let left = -1
        let right = history.length
        while (left + 1 <= right) {
            const mid = Math.floor((left + right) / 2)
            if (history[mid][0] < snap_id) {
                // 区间缩小为 (mid, right)
                left = mid
            } else {
                // 区间缩小为 (left, mid)
                right = mid
            }
        }
        return left
    }
}

module.exports = SnapshotArray
