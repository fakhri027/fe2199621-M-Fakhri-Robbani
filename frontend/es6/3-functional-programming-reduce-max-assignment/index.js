/**
 * Cari nilai tertinggi dari array menggunakan reduce
 * Contoh:
 *  Input: [1, 1, 1, 5]
 *  Output: 5
 *
 * Catatan: Tidak boleh menggunakan perintah Math.max().
 */

const maxFromArray = (numbers) => {
  // TODO: answer here
  return numbers.reduce((max, number) => {
    return max > number ? max : number;
  }, 0);
  
};
const numbers = [1, 1, 1, 5];
console.log(maxFromArray(numbers));
module.exports = maxFromArray