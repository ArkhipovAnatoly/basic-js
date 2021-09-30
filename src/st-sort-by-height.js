import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
  let copy = arr.slice();
  let indexes = [];
  let result = [];
  arr.forEach((val, index) => {
    if (val == -1) {
      indexes.push(index);
    }
  });

  result = copy.filter((val) => val !== -1).sort((a, b) => a - b);
  indexes.forEach((val) => {
    result.splice(val, 0, -1);
  });

  return result;
}
