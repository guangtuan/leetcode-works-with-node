
/**
 * @param {number[]} edges
 * @return {number}
 */
var longestCycle = function (edges) {
    const globalMap = {};
    class Node {
        constructor(val) {
            this.val = val;
            this.path = [val];
            this.visits = {
                [val]: 1
            };
        }
        add(val) {
            this.path.push(val);
            this.visits[val] = this.path.length;
        }
        lastAccess() {
            return this.path[this.path.length - 1];
        }
        assignGlobal(len) {
            for (let ele of this.path) {
                globalMap[ele] = len;
            }
        }
        findCycle(edges) {
            const nextVal = edges[this.lastAccess()];
            if (nextVal === -1) {
                return {
                    result: false,
                    len: -2,
                    nextVal
                };
            }
            if (this.visits[nextVal]) {
                // console.log(print(this));
                return {
                    result: true,
                    len: this.path.length - this.visits[nextVal] + 1,
                    nextVal
                }
            } else {
                this.add(nextVal);
                return {
                    result: false,
                    len: -1,
                    nextVal
                }
            }
        }
    }
    function print(node) {
        return JSON.stringify({ v: node.visits, p: node.path, val: node.val });
    }
    function getCycle(node, edges) {
        while (true) {
            if (globalMap[node.lastAccess()]) {
                // console.log("hit global", print(node));
                return {
                    result: true,
                    len: globalMap[node.lastAccess()],
                    nextVal: node.val
                };
            }
            const { result, len, nextVal } = node.findCycle(edges);
            if (len === -2) {
                return { len, nextVal };
            }
            if (result) {
                return { len, nextVal };
            }
        }
    }
    let ans = -1;
    for (let i = 0; i < edges.length; i++) {
        if (edges[i] === -1) {
            continue;
        }
        const node = new Node(edges[i]);
        const { len, nextVal } = getCycle(node, edges);
        if (len > ans) {
            ans = len;
            globalMap[nextVal] = len;
            node.assignGlobal(len);
        }
    }
    return ans;
};

module.exports = longestCycle;
