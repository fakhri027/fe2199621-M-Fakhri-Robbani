// Mengecek jika dua string adalah anagram
// Anagram adalah kata yang dibentuk melalui penataan ulang huruf-huruf dari beberapa kata lain.
//
// Contoh 1
// Input: a = "keen", b = "knee"
// Output: "Anagram"
// Explanation: Jika ditata, "knee" dan "keen" memiliki huruf-huruf yang sama, hanya berbeda urutan
//
// Contoh 2
// Input: a = "fried", b = "fired"
// Output: "Anagram"
// Explanation: Jika ditata, "fried" dan "fired" memiliki huruf-huruf yang sama, hanya berbeda urutan
//
// Contoh 3
// Input: a = "apple", b = "paddle"
// Output: "Bukan Anagram"
// Explanation: Jika ditata, "apple" dan "paddle" memiliki huruf-huruf yang berbeda

function anagramChecker(str1, str2) {
    let str1Arr = str1.split("");
    let str2Arr = str2.split("");
    for (let i = 0; i < str1Arr.length; i++) {
        for (let j = 0; j < str2Arr.length; j++) {
            if (str1Arr[i] === str2Arr[j]) {
                str2Arr.splice(j, 1);
                break;
            }
        }
    }
    if (str2Arr.length === 0) {
        return true;
    } else {
        return false;
    }
    // TODO: replace this
}


console.log(anagramChecker("keen", "knee"));
console.log(anagramChecker("fried", "fired"));
console.log(anagramChecker("apple", "paddle"));

module.exports = {
    anagramChecker
}