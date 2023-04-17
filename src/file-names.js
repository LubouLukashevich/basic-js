//const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let uniq = new Set();
    names.forEach((el, j, arr) => {
      if (uniq.has(el)) {
        let i = 1;
        console.log(el+`(${i})`);
        while ((uniq.has(el+`(${i})`))) {
          i += 1;
        } 
        arr[j] = el+`(${i})`;
        uniq.add(arr[j]);
      }
      else {
        uniq.add(el);
      }
    })
    return names;
  }

module.exports = {
  renameFiles
};
