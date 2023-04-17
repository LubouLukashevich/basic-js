//const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if ((typeof sampleActivity === 'string')&&((Number(sampleActivity) > 0))&&((Number(sampleActivity) <= 15))) {
   let MODERN_ACTIVITY = 15;
    let HALF_LIFE_PERIOD = 5730;
    let k = Math.log(2)/HALF_LIFE_PERIOD;
    let result = Math.ceil(Math.log(15/Number(sampleActivity))/k);
    return ((result == NaN)||(result === Infinity))? false : result;
  }
    else {
      return false;
    }
  }
  

module.exports = {
  dateSample
};
