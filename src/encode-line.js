//const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str === '') {
  return str
  }
  else {
     let count = 1;
     let char = str[0];
     let result = '';
   for (let i = 1; i < str.length; i++) {
     if (str[i] === char) { 
     count += 1;}
     else {
       result = result + ((count === 1)? '':count) + char;
       count = 1;
       char = str[i];
     }
   }
   result = result + ((count === 1)? '':count) + char;
   return result;
  }
 }

module.exports = {
  encodeLine
};
