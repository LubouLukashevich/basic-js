//const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let stroke = n.toString();
  let arr = [];
  for (let i = 0; i < stroke.length; i++) {
      arr.push(stroke.slice(0,i) + stroke.slice(i+1));
  }
  arr.sort((a,b) => b-a);
  return Number(arr[0]);
}

module.exports = {
  deleteDigit
};
