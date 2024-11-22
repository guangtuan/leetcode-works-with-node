function insert(intervals: number[][], newInterval: number[]): number[][] {
    const state: {
        stage: 'todo' | 'doing' | 'done'
        ans: number[][]
    } = {
        stage: 'todo',
        ans: [],
    }

    function caseOfToDo(interval: number[]) {
        const [l, r] = interval
        const [a, b] = newInterval
        // 不重叠，且可以返回了
        // 新区间在当前区间左边
        if (b < l) {
            state.ans.push([a, b])
            state.ans.push(interval)
            state.stage = 'done'
            return
        }
        // 新区间在当前区间右边
        // 不重叠
        if (r < a) {
            // 这种情况下，如果元素已经是最后一个，通过下边的补充来把区间放进数组
            state.ans.push(interval)
            return
        }
        // 重叠，进行区间的合并
        state.ans.push([Math.min(a, l), Math.max(r, b)])
        state.stage = 'doing'
    }

    function caseOfDoing(interval: number[]) {
        // 输入已经被合并过了，现在变成 ans[tail] 和 intervals[next] 的合并
        let array = state.ans
        const [a, b] = array[array.length - 1]
        const [l, r] = interval
        if (b >= l) {
            // ans.tail 和 intervals.next 重叠 合并并且继续 doing
            array[array.length - 1] = [a, Math.max(b, r)]
        } else {
            // ans.tail 和 intervals.next 不重叠
            state.ans.push(interval)
            state.stage = 'done'
        }
    }

    function caseOfDone(interval: number[]) {
        state.ans.push(interval)
    }

    for (let interval of intervals) {
        switch (state.stage) {
            case 'todo': {
                caseOfToDo(interval)
                break
            }
            case 'doing': {
                caseOfDoing(interval)
                break
            }
            case 'done': {
                caseOfDone(interval)
                break
            }
        }
    }

    if (state.stage === 'todo') {
        state.ans.push(newInterval)
    }
    return state.ans
}

module.exports = insert
