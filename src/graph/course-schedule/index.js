/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    // 判断一个图有没有环
    // node -> nodes
    const state = {}
    function hasCycle(node, nodes) {
        if (state[node] === 'done') {
            return false
        }
        if (state[node] === 'loading') {
            return true
        }
        state[node] = 'loading'
        for (let ele of nodes[node] || []) {
            if (hasCycle(ele, nodes)) {
                return true
            }
        }
        state[node] = 'done'
        return false
    }
    const m = {}
    for (let [a, b] of prerequisites) {
        if (m[b]) {
            m[b].push(a)
        } else {
            m[b] = [a]
        }
    }
    // const m = prerequisites.reduce(
    //     (acc, [a, b]) => (
    //         {
    //             ...acc,
    //             [b]: [...(acc[b] || []), a]
    //         }
    //     ),
    //     {}
    // )
    for (let ele of Object.keys(m)) {
        if (hasCycle(ele, m)) {
            return false
        }
    }
    return true
}

module.exports = canFinish
