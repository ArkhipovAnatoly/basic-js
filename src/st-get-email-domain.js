import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
export default function getEmailDomain(email) {
  let arr = email.split('@');
  let result = '';
  let count = 0;
  let pos = 0;
  for (let i = 0; i < arr.length; i++) {
    pos = arr[i].indexOf('.');
    while (pos !== -1) {
      count++;
      pos = arr[i].indexOf('.', pos + 1);
    }
    if (count == 1) {
      result = arr[i];
      break;
    }
    count = 0;
  }
  return result;
}
