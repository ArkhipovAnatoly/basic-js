import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
export default class VigenereCipheringMachine {
  constructor(mode = true) {
    this.mode = mode;
  }
  isUpperCase(letter) {
    var l = letter.charCodeAt();
    if (l > 64 && l < 91) {
      return true;
    } else {
      return false;
    }
  }

  isLowerCase(letter) {
    let l = letter.charCodeAt();
    if (l > 96 && l < 123) {
      return true;
    } else {
      return false;
    }
  }

  mod(n, m) {
    return ((n % m) + m) % m;
  }

  encrypt(enc, key) {
    if (!enc || !key) {
      throw new Error('Incorrect arguments!');
    }
    let encrypted = '';
    let j = 0;
    for (let i = 0; i < enc.length; i++) {
      let currentLetter = enc[i];
      const A = 65;
      const a = 97;

      if (this.isUpperCase(currentLetter)) {
        let Pi = currentLetter.charCodeAt() - A;
        let Ki = key[j % key.length].toUpperCase().charCodeAt() - A;
        let upperLetter = this.mod(Pi + Ki, 26);

        encrypted += String.fromCharCode(upperLetter + A);

        j++;
      } else if (this.isLowerCase(currentLetter)) {
        let Pi = currentLetter.charCodeAt() - a;
        let Ki = key[j % key.length].toLowerCase().charCodeAt() - a;
        let lowerLetter = this.mod(Pi + Ki, 26);

        encrypted += String.fromCharCode(lowerLetter + a);

        j++;
      } else {
        encrypted += currentLetter;
      }
    }
    return this.mode
      ? encrypted.toUpperCase()
      : encrypted.split('').reverse().join('');
  }

  decrypt(dec, key) {
    if (!dec || !key) {
      throw new Error('Incorrect arguments!');
    }
    let decrypted = '';
    let j = 0;
    for (let i = 0; i < dec.length; i++) {
      let currentLetter = dec[i];
      const A = 65;
      const a = 97;

      if (this.isUpperCase(currentLetter)) {
        let Ci = currentLetter.charCodeAt() - A;
        let Ki = key[j % key.length].toUpperCase().charCodeAt() - A;
        let upperLetter = this.mod(Ci - Ki, 26);
        decrypted += String.fromCharCode(upperLetter + A);
        j++;
      } else if (this.isLowerCase(currentLetter)) {
        let Ci = currentLetter.charCodeAt() - a;
        let Ki = key[j % key.length].toLowerCase().charCodeAt() - a;
        let lowerLetter = this.mod(Ci - Ki, 26);

        decrypted += String.fromCharCode(lowerLetter + a);

        j++;
      } else {
        decrypted += currentLetter;
      }
    }
    return this.mode ? decrypted : decrypted.split('').reverse().join('');
  }
}
