//const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const e = new Error("You can't remove incorrect link!");
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
   if (value === undefined) {value = ''}; 
   this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if ((Number.isInteger(position))&&(position > 0)&&(position <= this.chain.length))  {
    for (let i = position-1; i < this.chain.length; i++) {
      this.chain[i] = this.chain[i+1]; 
    }
    this.chain.pop();
    return this;
    }
    else {
      this.chain = [];
      throw e;
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = '';
    this.chain.forEach(el => result = result + `( ${el} )~~`);
    this.chain = [];
    return result.slice(0,-2);
  }
};

module.exports = {
  chainMaker
};
