import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 *
 */
export default {
  elements: [],
  getLength() {
    return this.elements.length;
  },
  addLink(value) {
    this.elements.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (
      typeof position != 'number' ||
      position < 1 ||
      position > this.getLength()
    ) {
      this.elements = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.elements.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.elements.reverse();
    return this;
  },
  finishChain() {
    let chain = this.elements.join('~~');
    this.elements = [];
    return chain;
  },
};
