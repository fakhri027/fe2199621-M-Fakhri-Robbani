/**
 * Buatlah sebuah fungsi yang menerima berapapun jumlah argumen dalam bentuk angka, kemudian mengembalikan nilai maksimal dari semua angka tersebut.
 *
 * max(1, 2, 3, 4, 12, 3, 4) output: 12
 * max(1, 2, 5) output: 5
 * max(1) output: 1
 *
 * Dilarang menggunakan Math.max
 */
const max = (...args) => {
  // TODO: answer here
  let max = args[0];
  for (let i = 0; i < args.length; i++) {
    if (args[i] > max) {
      max = args[i];
    } else{
      max = max;
    } 
  } return max;
};
const result = max(1, 2, 3, 4, 12, 3, 4);
const result2 = max(1, 2, 5);
const result3 = max(1);
console.log(result);
console.log(result2);
console.log(result3);
module.exports = max