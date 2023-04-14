//const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let domainSort = {};
  domains.forEach((el) => {
    let arr = el.split('.');
    let dome = '';
    for (let i = arr.length - 1; i >= 0; i--) {
      dome = dome + '.' + arr[i];
      if (dome in domainSort) {
        domainSort[dome] +=1;
      }
      else {
        domainSort[dome] = 1;
      }
    }
  });
  return domainSort;
}

module.exports = {
  getDNSStats
};
