/**
 * Jumlahkan semua elemen angka dalam sebuah array
 * Contoh:
 *  Input: [1, 1, 1, 5]
 *  Output: 8
 */

const sumTotalArray = (numbers) => {
  // TODO: answer here
  return numbers.reduce((previous, current) => {
    return previous + current;
  }, 0);
};
const numbers = [1, 1, 1, 5];
console.log(sumTotalArray(numbers)); // 8
module.exports = sumTotalArray