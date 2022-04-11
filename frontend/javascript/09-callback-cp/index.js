// Buatlah callback yang memenuhi function call di line 29

// function ini menduplikasi tiap karakter pada sebuah string
// contoh: hehe => hheehhee
function doubleChars(str) {
  // kerjakan disini
  // TODO: answer here
  return str+str;
}

// function ini mengulang pengaplikasian callback pada str sejumlah num
function repeat(str, num, cb) {
  // kerjakan disini
  // TODO: answer here
  var result = '';
  for (var i = 0; i < num; i++) {
    result += cb(str);
  }
  return result;
}
console.log(repeat("triple", 1, doubleChars)); // ttttrrrriiiipppplllleeee
