// Terapkan pow(x, n), yang menghitung x pangkat n (yaitu, x^n)
//
// Contoh 1:
// Input: x = 2.0, n = 10
// Output: 1024.0
//
// Contoh 2:
//
// Input: x = 2.1, n = 3
// Output: 9.261
//
// Example 3:
// Input: n = 2.0, n = -2
// Output: 0.25
// Explanation: 2^-2 = (1/2)^2 = 1/4 = 0.25

function myPow(x, n) {
    if (n === 0) return 1;
    
    let pow = Math.abs(n);
    
    // TODO: answer here
    if (n < 0 ) {
        return 1 / myPow(x, pow);
    } else {
        return myPow(x, pow - 1) * x;  
    }
    
    // TODO: answer here
}
console.log(myPow(2.0, 10));
console.log(myPow(2.1, 3));
console.log(myPow(2.0, -2));
console.log(myPow(20, 0));
console.log(myPow(3, 2))
console.log(myPow(2, -3));

module.exports = { myPow }