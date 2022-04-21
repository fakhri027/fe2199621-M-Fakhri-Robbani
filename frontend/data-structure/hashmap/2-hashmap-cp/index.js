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
    let str1Map = new Map();
    let str2Map = new Map();
    for (let i = 0; i < str1.length; i++) {
        if (str1Map.has(str1[i])) {
            str1Map.set(str1[i], str1Map.get(str1[i]) + 1);
        } else {
            str1Map.set(str1[i], 1);
        }
    }

    for (let i = 0; i < str2.length; i++) {
        if (str2Map.has(str2[i])) {
            str2Map.set(str2[i], str2Map.get(str2[i]) + 1);
        } else {
            str2Map.set(str2[i], 1);
        }
    }

    return str1Map.size === str2Map.size ? "Anagram" : "Bukan Anagram"; // TODO: replace this
}

console.log(anagramChecker("keen", "knee"));
console.log(anagramChecker("kee", "knn"));
console.log(anagramChecker("fried", "fired"));

module.exports = {
    anagramChecker
}
