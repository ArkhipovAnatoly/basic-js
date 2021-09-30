import { NotImplementedError } from '../extensions/index.js';

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
export default function renameFiles(names) {
  let result = [];
  let copy = names.slice();
  let num = 1;
  for (let i = 0; i < copy.length; i++) {
    if (result.includes(copy[i])) {
      result.push(copy[i] + `(${num})`);
      num++;
    } else {
      num = 1;
      result.push(copy[i]);
    }
  }
  return result;
}
