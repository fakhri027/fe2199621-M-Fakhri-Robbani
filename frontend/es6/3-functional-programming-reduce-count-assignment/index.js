/**
 * Hitung berapa banyak pengulangan angka dari array berikut dan kembalikan dalam bentuk key-value
 * Contoh:
 *  Input: [1, 1, 1, 5, 5, 10, 9]
 *  Output: {1: 3, 5: 2, 10: 1, 9: 1}
 *
 */

const countRepetition = (numbers) => {
  // TODO: answer here
  const repetition = numbers.reduce((prev, cur) => {
    if(prev[cur] === undefined){
      prev[cur] = 1;
    } else {
      prev[cur] += 1;
    }
    return prev;
  }, {});
  return repetition;
};

const numbers = [1, 1, 1, 5, 5, 10, 9];
console.log(countRepetition(numbers));
module.exports = countRepetition