/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function(nums) {
    const createHeap = ({ max, min }) => () => {
        const heap = [null];
        const half = number => Math.floor(number / 2);
        const createTransferConditionWhenInsert = ({ max, min }) => ({ node, parent }) => {
            if (min) {
                return node < parent;
            }
            if (max) {
                return node > parent;
            }
        };
        const canTransferWhenInsert = createTransferConditionWhenInsert({ max, min });
        const createTransferConditionWhenRemove = ({ max, min }) => ({ node, left, right }) => {
            if (min) {
                return node >= left || node >= right;
            }
            if (max) {
                return node <= left || node <= right;
            }
        };
        const canTransferWhenRemove = createTransferConditionWhenRemove({ max, min });
        const createGetterOfSwapTarget = ({ max, min }) => ({ left, right }) => {
            if (max) {
                return Math.max(...[left, right].filter(eleIsNotNull));
            }
            if (min) {
                return Math.min(...[left, right].filter(eleIsNotNull));
            }
        };
        const getSwapTarget = createGetterOfSwapTarget({ max, min });
        const eleIsNull = value => value === undefined;
        const eleIsNotNull = value => value !== null && value !== undefined;
        return {
            size: () => {
                return heap.length - 1;
            },
            toArray: () => {
                const copyOfHeap = JSON.parse(JSON.stringify(heap));
                copyOfHeap.shift();
                return copyOfHeap;
            },
            insert: element => {
                heap.push(element);
                let idx = heap.length - 1;
                let parentIdx = half(idx);
                while (canTransferWhenInsert({
                    node: heap[idx],
                    parent: heap[parentIdx]
                })) {
                    if (idx > 1) {
                        // swap parent and current element
                        [heap[parentIdx], heap[idx]] = [heap[idx], heap[parentIdx]];
                    }
                    if (half(idx) > 1) {
                        idx = half(idx);
                        parentIdx = half(idx);
                    } else {
                        break;
                    }
                }
            },
            remove: () => {
                if (heap.length === 1) {
                    return null;
                }
                // swap root and last element
                [heap[1], heap[heap.length - 1]] = [heap[heap.length - 1], heap[1]];
                const result = heap.pop();
                let [idx, left, right] = [1, 2, 3];
                while (canTransferWhenRemove({
                    node: heap[idx],
                    left: heap[left],
                    right: heap[right]
                })) {
                    const swapTarget = getSwapTarget({ left: heap[left], right: heap[right] });
                    if (heap[left] === swapTarget) {
                        [heap[idx], heap[left]] = [heap[left], heap[idx]];
                        idx = idx * 2;
                    } else {
                        [heap[idx], heap[right]] = [heap[right], heap[idx]];
                        idx = idx * 2 + 1;
                    }
                    [left, right] = [idx * 2, idx * 2 + 1];
                    if ([heap[left], heap[right]].some(eleIsNull)) {
                        break;
                    }
                }
                return result;
            }
        }
    }
    function numberBitSum(num) {
        return (num + "").split("")
            .map(str => Number.parseInt(str))
            .reduce((acc, curr) => acc + curr, 0);
    }
    const st = {};
    const createMaxHeap = createHeap({max: true});
    for (let num of nums) {
        const bitSum = numberBitSum(num)
        if (!st[bitSum]) {
            st[bitSum] = createMaxHeap();
        }
        st[bitSum].insert(num);
    }
    let max = -1;
    Object.entries(st).forEach(e => {
        if (e[1].size() >= 2) {
            const first = e[1].remove();
            const second = e[1].remove();
            max = Math.max(first + second, max);
        }
    });
    return max;
};

module.exports = maximumSum;