/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let i = 0;
  while (i <= haystack.length && i <= haystack.length - needle.length) {
    let pass = true;
    for (let j = 0; j < needle.length; j++) {
      if (!pass) {
        break;
      }
      if (haystack.charAt(i + j) !== needle.charAt(j)) {
        pass = false;
      }
    }
    if (pass) {
      return i;
    }
    i++;
  }
  return -1;
}

module.exports = strStr;