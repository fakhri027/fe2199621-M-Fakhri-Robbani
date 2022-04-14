/**
 * Ambil semua element yang dengan digt yang ditentukan
 * - fungsi akan menerima dua argumen
 * - argumen pertama array angka
 * - argumen kedua berapa digit yang akan di filter
 * Contoh
 *  input: [88, 44, 3, 8481, 444], 2
 *  output: [88, 44]
 *
 */

const filterDigit = (array, digit) => {
  // TODO: answer here
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (String(array[i]).length === digit) {
      result.push(array[i]);
    } 
  } return result;
};
// const input = [88, 44, 3, 8481, 444];
// console.log(filterDigit(input, 2));
module.exports = filterDigit
