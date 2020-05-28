/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function (A) {
    let evenIdx = 0;
    let oddIdx = 1;
    const swap = (arr, position1, position2) => {
        const tmp = arr[position1];
        arr[position1] = arr[position2];
        arr[position2] = tmp;
    };
    const isEven = num => num % 2 === 0;
    const isOdd = num => num % 2 === 1;
    const firstPositionEvenButValueOdd = (array, startIndex) => {
        for (let i = startIndex; i < array.length; i = i + 2) {
            if (isOdd(array[i])) {
                return i;
            }
        }
        return -1;
    };
    const firstPositionOddButValueEven = (array, startIndex) => {
        for (let i = startIndex; i < array.length; i = i + 2) {
            if (isEven(array[i])) {
                return i;
            }
        }
        return -1;
    };
    for (let i = 0; i < A.length; i++) {
        if (isEven(i)) {
            // even
            if (isEven(A[i])) {
                if (evenIdx <= i) {
                    evenIdx = i + 2;
                }
            } else {
                // 如果 index 是偶数，而 value 是奇数
                // 找第一个奇数数字/偶数位置的 index，和这个数字换位置
                const idx = firstPositionOddButValueEven(A, oddIdx);
                if (idx !== -1) {
                    swap(A, i, idx);
                    evenIdx = idx;
                }
            }
            continue;
        }
        // odd
        if (isOdd(A[i])) {
            if (oddIdx <= i) {
                oddIdx = i + 2;
            }
        } else {
            // 如果 index 是偶数，而 value 是奇数
            // 找第一个偶数数字/奇数位置的 index，和这个数字换位置
            const idx = firstPositionEvenButValueOdd(A, evenIdx);
            if (idx !== -1) {
                swap(A, i, idx);
                oddIdx = idx;
            }
        }
    }
    return A;
};

module.exports = sortArrayByParityII;