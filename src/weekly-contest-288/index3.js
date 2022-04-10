/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 *
 *        console.log("sorted --->");
 *         console.table([nums]);
 */
var maximumProduct = function (nums, k) {
    const createHeap = () => {
        const heap = [null];
        const half = number => Math.floor(number / 2);
        const ifTransferWhenInsert = ({node, parent}) => node < parent;
        const ifTransferWhenRemove = ({node, left, right}) => node >= left || node >= right;
        const eleIsNull = value => value === undefined;
        const eleIsNotNull = value => value !== null && value !== undefined;
        const getSwapTarget = ({left, right}) => Math.min(...[left, right].filter(eleIsNotNull));
        return {
            inner: () => heap.slice(1),
            remove: () => {
                if (heap.length === 1) {
                    return null;
                }
                // swap root and last element
                [heap[1], heap[heap.length - 1]] = [heap[heap.length - 1], heap[1]];
                const result = heap.pop();
                let [idx, left, right] = [1, 2, 3];
                while (ifTransferWhenRemove({
                    node: heap[idx],
                    left: heap[left],
                    right: heap[right]
                })) {
                    const swapTarget = getSwapTarget({left: heap[left], right: heap[right]});
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
            },
            insert: element => {
                heap.push(element);
                let idx = heap.length - 1;
                let parentIdx = half(idx);
                while (ifTransferWhenInsert({
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
            }
        }
    }

    let heap = createHeap();
    for (let ele of nums) {
        heap.insert(ele);
    }
    while (k > 0) {
        heap.insert(heap.remove() + 1);
        k = k - 1;
    }
    const mod = 10 ** 9 + 7;
    return heap.inner().reduce((acc, curr) => acc * curr % mod, 1);
};

module.exports = maximumProduct;