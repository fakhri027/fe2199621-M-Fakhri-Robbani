// Mengembalikan boolean untuk mengecek apakah teks palindrom
//
// contoh: 
// teks1 = hello
// teks2 = madam
// teks3 = kasur ini rusak
// hasil:
// teks1 dibalik menjadi olleh, maka balikan akan false
// teks2 dibalik sama menjadi madam, maka balikan akan true
// teks3 dibalik sama menjadi kasur ini rusak, maka balikan akan true

function checkPalindrome(teks) {
    // TODO: answer here
    // cara1
    var kata = '';
    for (let i = teks.length - 1; i >= 0; i--) {  
        kata += teks[i];
    }
    return kata === teks
    // cara2
    // var pisahTeks = teks.split('');
    // var balikTeks = pisahTeks.reverse();
    // var gabungTeks = balikTeks.join('');
    // return gabungTeks === teks;
}

// masukan teks
const string = prompt('Masukan string: ');

// memanggil fungsi palindrom
const value = checkPalindrome(string);

console.log(value);