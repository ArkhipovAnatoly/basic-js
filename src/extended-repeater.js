import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  let result = '';
  let addition = '';

  str = String(str);

  if ('addition' in options) {
    addition = String(options.addition);
  }
  let separator = '+';
  let additionSeparator = '|';
  let repeatTimes = 1;
  let additionRepeatTimes = 0;

  if ('separator' in options) {
    separator = options.separator;
  }
  if ('additionSeparator' in options) {
    additionSeparator = options.additionSeparator;
  }
  if ('repeatTimes' in options) {
    repeatTimes = options.repeatTimes;
  }
  if ('additionRepeatTimes' in options) {
    additionRepeatTimes = options.additionRepeatTimes;
  }
  for (let i = 0; i < repeatTimes; i++) {
    result += str;
    if (additionRepeatTimes == 0) {
      result += addition;
    } else {
      for (let j = 0; j < additionRepeatTimes; j++) {
        if (j != additionRepeatTimes - 1) {
          result += addition + additionSeparator;
        } else {
          result += addition;
        }
      }
    }
    if (i != repeatTimes - 1) {
      result += separator;
    }
  }
  return result;
}
