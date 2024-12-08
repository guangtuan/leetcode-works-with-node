function maxRectangleArea(points: number[][]): number {
    const pairwise = <T, R>(arr: T[], callback: (e1: T, e2: T) => R) => {
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                callback(arr[i], arr[j])
            }
        }
    }
    // 4个点构成一个矩形
    // 边和坐标轴平行
    // x相同的点才能成为一条边 或者y相同的点 这里解法选用x相同的点（也就是平行于x轴）
    type point = {
        x: number
        y: number
        id: number
    }
    type edge = {
        x: number
        start: { y: number; id: number }
        end: { y: number; id: number }
    }
    const contains = (p: point, e: edge) =>
        e.start.id === p.id || e.end.id === p.id
    const ps: point[] = points.map(([x, y]: number[], index: number) => ({
        x,
        y,
        id: index,
    }))
    type Range = { l: number; r: number }
    const inRange = (n: number, range: Range): boolean =>
        range.l <= n && n <= range.r

    const align = (e1: edge, e2: edge): boolean =>
        e1.start.y === e2.start.y && e1.end.y === e2.end.y
    const edges = (() => {
        // 将x相同的点都分在一起
        const groupByX = ps.reduce((acc: Record<number, point[]>, p: point) => {
            acc[p.x] = acc[p.x] || []
            acc[p.x].push(p)
            return acc
        }, {})
        // 同一个x的点按照y值的大小排序，两两组边
        const res: edge[] = []
        for (let key of Object.keys(groupByX)) {
            const x = Number.parseInt(key)
            const sortedPs = groupByX[x].sort(
                (p1: point, p2: point) => p1.y - p2.y,
            )
            for (let i = 0; i < sortedPs.length - 1; i++) {
                res.push({ x: x, start: sortedPs[i], end: sortedPs[i + 1] })
            }
        }
        return res.sort((e1, e2) => e1.x - e2.x)
    })()
    const getArea = (ex1: edge, ex2: edge): number => {
        const [y1, y2] = [ex1.start.y, ex1.end.y]
        const [x1, x2] = [ex1.x, ex2.x]
        const other = ps.filter(
            (p: point) => !contains(p, ex1) && !contains(p, ex2),
        )
        for (let { x, y } of other) {
            // 范围内不能有其他的点
            if (inRange(x, { l: x1, r: x2 }) && inRange(y, { l: y1, r: y2 })) {
                return -1
            }
        }
        // 符合条件，计算面积
        return (y2 - y1) * (x2 - x1)
    }
    let ans = -1
    pairwise(edges, (a, b) => {
        // 如果 2 个线段的 x 一致，无法封闭成一个矩形
        if (a.x === b.x) {
            return
        }
        // 线段两头的 y 需要相等（对齐）才能封闭成一个矩形
        if (!align(a, b)) {
            return -1
        }
        ans = Math.max(getArea(a, b), ans)
    })
    return ans
}

module.exports = maxRectangleArea
