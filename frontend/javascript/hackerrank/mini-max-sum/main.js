// Mini-Max Sum
// - Problem Solving (Basic)
// - Difficulty: Easy

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

// Full Problem: https://www.hackerrank.com/challenges/mini-max-sum/problem

function miniMaxSum(arr) {
  // Write your code here
  // TODO: answer here
  var arrClone1 = arr.slice() 
  var arrClone2 = arr.slice() 

  var arrKecil = arrClone1.sort(function(a, b){return a - b;})
  arrKecil.pop()

  var arrBesar = arrClone2.sort(function(a, b){return b - a;})
  arrBesar.pop()

  function tambah(a, b) {
    return a + b;
  }

  var hasil1 = arrKecil.reduce(tambah) 
  var hasil2 = arrBesar.reduce(tambah)    

  return (hasil1 + " " + hasil2)
}

function main() {
  //arr = readLine().split(' ');
  //arr = arr.map(Number);
  var arr = [1, 2, 3, 4, 5]; // override input
  let result = miniMaxSum(arr);
  console.log(result)
}

main(); // execute program

module.exports = miniMaxSum