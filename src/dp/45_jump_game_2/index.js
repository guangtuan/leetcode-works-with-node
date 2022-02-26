var jump = function (nums) {

    let position = 0;
    let step = 0;

    function getNextVal (nums, position, range, numsLength) {
        // reach end
        if (position + nums[position] + 1 >= numsLength) {
            return {
                nextVal: nums[numsLength - 1],
                nextPosition: numsLength - 1
            }
        }
        let v = -1;
        let idx = position + 1;
        for (let i = position + 1; i <= position + range; i++) {
            if (nums[i] >= (v + idx - i)) {
                idx = i;
                v = nums[i]
            }
        }
        return {
            nextVal: v,
            nextPosition: idx
        }
    }

    while (true) {
        if (position === nums.length - 1) {
            break;
        }
        let curr = nums[position];
        let { nextPosition, nextVal } = getNextVal(nums, position, curr, nums.length);
        curr = nextVal;
        position = nextPosition;
        step++;
        // console.log(JSON.stringify({ total: nums.length, position, curr, step }));
    }
    return step;
};

module.exports = jump;