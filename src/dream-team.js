//const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(names) {
  if (Array.isArray(names)) {
  return   names
  .map(el => (typeof el === 'string')? first(el) : '')
  .sort()
  .join('');
  }
  else { 
    return false;
  }
  }
  
  function first(name) {
    for (let i = 0; i < name.length; i++) {
      if (name[i] != ' ' ) return name[i].toUpperCase();
    }
  }

module.exports = {
  createDreamTeam
};
