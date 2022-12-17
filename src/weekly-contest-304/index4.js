/**
 * @param {number[]} edges
 * @return {number}
 */
var longestCycle = function (edges) {
    const globalMap = {}
    class Access {
        constructor(val) {
            this.path = []
            this.visits = {}
            this.add(val)
        }
        add(val) {
            this.path.push(val)
            this.visits[val] = this.path.length
        }
        lastAccess() {
            return this.path[this.path.length - 1]
        }
    }
    const assignGlobal = (len, node) => {
        for (let ele of node.path) {
            globalMap[ele] = len
        }
    }
    function getCycle(access, edges) {
        while (true) {
            const lastAccess = access.lastAccess()
            if (globalMap[lastAccess]) {
                return globalMap[lastAccess]
            }
            const nextVal = edges[lastAccess]
            if (nextVal === -1) {
                return -1
            }
            if (!access.visits[nextVal]) {
                access.add(nextVal)
            } else {
                return access.path.length - access.visits[nextVal] + 1
            }
        }
    }
    let ans = -1
    for (let ele of edges) {
        if (ele === -1) {
            continue
        }
        const access = new Access(ele)
        const len = getCycle(access, edges)
        if (len > ans) {
            ans = len
            assignGlobal(len, access)
        }
    }
    return ans
}

module.exports = longestCycle
