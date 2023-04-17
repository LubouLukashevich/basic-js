//const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;
  let test = (s1.length <=s2.length) ? s1.split(''):s2.split('');
  let str = (s1.length <=s2.length) ? s2:s1;
 test.forEach((el)=> {
   let pos = str.indexOf(el);
   if (pos != -1) {
     count += 1;
     str = str.slice(0, pos)+str.slice(pos+1);
   }
 })
return count;
}

module.exports = {
  getCommonCharacterCount
};
