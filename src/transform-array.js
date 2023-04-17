//const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  const e = new Error("\'arr\' parameter must be an instance of the Array!");
  if (Array.isArray(arr)) {
      let data = [];
      arr.forEach(el => data.push(el));
      data.forEach((el,j,mas) => {
      switch (el) {
        case '--discard-prev': 
          mas[j-1] = ''; 
          mas[j] = '';
      break;
        case '--double-prev': 
          if (j-1 >= 0) {
            mas[j] = mas[j-1];}
          else {
           mas[j] = '';}
      break;
    case '--double-next': 
          if (j+1 < mas.length) {
           mas[j] = mas[j+1]; 
          }
          else {
            mas[j] = '';
          }
      break;
    case '--discard-next': 
          mas[j+1] = ''; 
          mas[j] = '';
      break; 
      }});
     let result = [];
    data.forEach(el => { if (el != '') result.push(el)});
    return result;            
  }
else {
  throw e;
}
}


module.exports = {
  transform
};
