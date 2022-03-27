(() => {
    const parse = number => {
        if (number === 0) {
            return [0];
        }
        let len = Math.floor(Math.log10(number));
        let remain = number;
        let ret = [];
        while (len >= 0) {
            let divider = Math.pow(10, len);
            let curr = Math.floor(remain / divider);
            remain = remain - curr * divider;
            ret.unshift(curr);
            len--;
        }
        return ret;
    }
    const merge = array => {
        return array.map((value, index, array) => {
            return value * Math.pow(10, array.length - index - 1);
        }).reduce((acc, curr) => acc + curr, 0);
    }
    console.log(merge(parse(9999)));
})();