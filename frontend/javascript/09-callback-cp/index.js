// Buatlah callback yang memenuhi function call di line 29

// function ini menduplikasi tiap karakter pada sebuah string
// contoh: hehe => hheehhee
function doubleChars(str) {
  // TODO: answer here
  return str+str;
}

// function ini mengulang pengaplikasian callback pada str sejumlah num
function repeat(str, num, cb) {
  // TODO: answer here
  var result = '';
  for (var i = 0; i < num; i++) {
    result += cb(str);
  }
  return result;
}
<<<<<<< HEAD
console.log(repeat("triple", 1, doubleChars)); // ttttrrrriiiipppplllleeee
=======

console.log(repeat("triple", 2, doubleChars)); //  ttttrrrriiiipppplllleeee

module.exports = {
  doubleChars,
  repeat
}
>>>>>>> 466979049e6a25d12227dd7a51f55bb2aefac437
