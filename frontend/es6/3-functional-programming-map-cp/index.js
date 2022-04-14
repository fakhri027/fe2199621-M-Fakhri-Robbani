/**
 * Tampilkan pasang huruf besar dari semua huruf kecil yang ada pada array
 
 * Contoh 
 *  input: ['a', 'b', 'c', 'd']
 *  output: [ {'a': 'A'}, {'b': 'B'}, {'D': 'c'}, {'d': 'D'}]
 * 
 */

const lowerToUpperMap = (array) => {
  // TODO: answer here
  let hasil = [];
  for (let i = 0; i < array.length; i++) {
    let obj = {};
    obj[array[i]] = array[i].toUpperCase();
    hasil.push(obj);
  }
  return hasil;
};
console.log(lowerToUpperMap(['a', 'b', 'c', 'd']));
module.exports = lowerToUpperMap
