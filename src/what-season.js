import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
export default function getSeason(date) {
  let season = '';
  if (arguments.length == 0) {
    return 'Unable to determine the time of year!';
  }
  if (Object.prototype.toString.call(date) !== '[object Date]')
    throw new Error('Invalid date!');

  try {
    date.valueOf();
  } catch (error) {
    throw new Error('Invalid date!');
  }

  switch (date.getMonth() + 1) {
    case 1:
    case 2:
    case 12:
      season = 'winter';
      break;
    case 3:
    case 4:
    case 5:
      season = 'spring';
      break;
    case 6:
    case 7:
    case 8:
      season = 'summer';
      break;
    case 9:
    case 10:
    case 11:
      season = 'autumn';
      break;
  }

  return season;
}
